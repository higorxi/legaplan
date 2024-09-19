"use client"
import React, { useState, useEffect } from 'react';
import styles from '../styles/task.module.scss';
import { LuTrash } from 'react-icons/lu';
import Modal from './modal';
import { useTasks } from '../contexts/TaskContexts';

interface TaskProps {
  id: string;
  title: string;
}

export default function Task({ id, title }: TaskProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { deleteTask, updateTaskStatus } = useTasks();

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const task = tasks.find((task: { id: string }) => task.id === id);
    setIsChecked(task ? task.completed : false);
  }, [id]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCheckboxChange = () => {
    const newStatus = !isChecked;
    setIsChecked(newStatus);
    updateTaskStatus(id, newStatus);
  };

  const handleDelete = () => {
    deleteTask(id);
    closeModal();
  };

  return (
    <>
      <div className={styles.task}>
        <input 
          type="checkbox" 
          className={styles.checkbox} 
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className={styles.taskText}>{title}</span>
        <LuTrash className={styles.deleteIcon} size={20} onClick={openModal} />
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} type='delete' onConfirm={handleDelete} />
    </>
  );
}
