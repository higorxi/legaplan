"use client";
import { useState } from "react";
import Button from "../ui/button";
import Task from "./task";
import styles from '../styles/todolist.module.scss';

export default function TodoList() {
  const [tasks] = useState<number>(3); 
  const [completedTasks] = useState<number>(1); 

  return (
    <div className={styles.todoListWrapper}>
      <div className={styles.todoListContainer}>
        <div className={styles.taskSection}>
          <p className={styles.title}>Suas tarefas de hoje</p>
          <div className={styles.taskList}>
            {[...Array(3)].map((_, index) => (
              <Task key={index} />
            ))}
          </div>
        </div>
        <div className={styles.completedTasksSection}>
          {completedTasks > 0 && (
            <>
              <p className={styles.title}>Tarefas finalizadas</p>
              <div className={styles.completedTasksList}>
                {[...Array(1)].map((_, index) => (
                  <Task key={`completed-${index}`} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className={styles.buttonWrapper}>
        <Button />
      </div>
    </div>
  );
}
