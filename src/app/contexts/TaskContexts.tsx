"use client"
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

interface TaskType {
  id: string;
  title: string;
  completed: boolean;
}

interface TaskContextType {
  tasks: TaskType[];
  completedTasks: TaskType[];
  addTask: (task: TaskType) => void;
  deleteTask: (taskId: string) => void;
}

const TaskContext = createContext<TaskContextType | undefined>(undefined);

export function TaskProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskType[]>([]);

  useEffect(() => {
    const loadTasks = () => {
      const allTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      setTasks(allTasks.filter((task: TaskType) => !task.completed));
      setCompletedTasks(allTasks.filter((task: TaskType) => task.completed));
    };

    loadTasks();
  }, []);

  const addTask = (task: TaskType) => {
    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const deleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <TaskContext.Provider value={{ tasks, completedTasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
