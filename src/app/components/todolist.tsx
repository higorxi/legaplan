"use client"
import React, { useState } from 'react';
import Button from '../ui/button';
import Task from './task';
import styles from '../styles/todolist.module.scss';
import Modal from './modal';
import { useTasks } from '../contexts/TaskContexts';

export default function TodoList() {
  const { tasks, completedTasks } = useTasks();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className={styles.todoListWrapper}>
        <div className={styles.todoListContainer}>
          <div className={styles.taskSection}>
            <p className={styles.title}>Suas tarefas de hoje</p>
            <div className={styles.taskList}>
              {tasks.length === 0 ? (
                <p className={styles.noTasks}>Nenhuma tarefa encontrada.</p>
              ) : (
                tasks.map((task) => (
                  <Task key={task.id} id={task.id} title={task.title} />
                ))
              )}
            </div>
          </div>
            <div className={styles.completedTasksSection}>
              <p className={styles.title}>Tarefas finalizadas</p>
              <div className={styles.completedTasksList}>
                {completedTasks.map((task) => (
                  <Task key={task.id} id={task.id} title={task.title} />
                ))}
              </div>
            </div>
        </div>
        <div className={styles.buttonWrapper}>
          <Button onClick={openModal}>Adicionar Tarefa</Button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal} type='add' />
    </>
  );
}
