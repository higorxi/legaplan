import React, { ButtonHTMLAttributes } from 'react';
import button from '../styles/button.module.scss'; 

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
  return (
    <button className={`${button.button} ${button[variant]}`} {...props}>
      {children || 'Adicionar novas tarefas'}
    </button>
  );
};

export default Button;
