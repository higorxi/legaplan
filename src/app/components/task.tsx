"use client"
import React, { useState } from 'react';
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
  const { deleteTask } = useTasks();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
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
