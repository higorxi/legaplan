"use client";
import { useState } from "react";
import styles from '../styles/task.module.scss';
import { LuTrash } from "react-icons/lu";

export default function Task() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className={styles.task}>
      <input 
        type="checkbox" 
        className={styles.checkbox} 
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span className={styles.taskText}>Frase do item</span>
      <LuTrash className={styles.deleteIcon} />
    </div>
  );
}
