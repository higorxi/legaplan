"use client"
import React, { useState } from 'react';
import Button from '../ui/button';
import styles from '../styles/modal.module.scss';
import { useTasks } from '../contexts/TaskContexts';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'add' | 'delete';
  onConfirm?: () => void; 
}

export default function Modal({ isOpen, onClose, type, onConfirm }: ModalProps) {
  const [taskTitle, setTaskTitle] = useState<string>('');
  const { addTask } = useTasks();

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      addTask({ id: Date.now().toString(), title: taskTitle, completed: false });
      onClose();
    }
  };

  const handleDeleteTask = () => {
    if (onConfirm) {
      onConfirm();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modal_overlay} onClick={onClose}>
      <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
        <h2 className={styles.modal_title}>
          {type === 'add' ? 'Nova Tarefa' : 'Deletar tarefa'}
        </h2>
        <div className={styles.modal_body}>
          {type === 'add' ? (
            <div className={styles.form_group}>
              <label className={styles.task_title}>Título</label>
              <input
                id="task-title"
                type="text"
                placeholder="Digite"
                className={styles.input}
                value={taskTitle}
                onChange={(e) => setTaskTitle(e.target.value)}
              />
            </div>
          ) : (
            <p className={styles.confirmation_text}>Tem certeza que você deseja deletar essa tarefa?</p>
          )}
          <div className={styles.modal_footer}>
            <Button onClick={onClose} variant='secondary'>
              {type === 'add' ? 'Cancelar' : 'Cancelar'}
            </Button>
            <Button
              variant={type === 'add' ? 'primary' : 'cancel'}
              onClick={type === 'add' ? handleAddTask : handleDeleteTask}
            >
              {type === 'add' ? 'Adicionar' : 'Deletar'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
