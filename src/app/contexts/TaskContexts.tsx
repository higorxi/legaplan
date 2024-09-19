"use client"
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

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
  updateTaskStatus: (taskId: string, completed: boolean) => void;
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
    const allTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = allTasks.filter((task: TaskType) => task.id !== taskId);
  
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    
    setTasks(updatedTasks.filter((task: TaskType) => !task.completed));
    setCompletedTasks(updatedTasks.filter((task: TaskType) => task.completed));
  };

  const updateTaskStatus = (taskId: string, completed: boolean) => {
    const allTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    const updatedTasks = allTasks.map((task: TaskType) =>
      task.id === taskId ? { ...task, completed } : task
    );
    setTasks(updatedTasks.filter((task: TaskType) => !task.completed));
    setCompletedTasks(updatedTasks.filter((task: TaskType) => task.completed));
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    <TaskContext.Provider value={{ tasks, completedTasks, addTask, deleteTask, updateTaskStatus }}>
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
