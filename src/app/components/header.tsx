import Image from "next/image";
import FocalPoint from "../assets/logo/logo.svg";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import styles from '../styles/header.module.scss'; 

export default function Header() {
  const today = new Date();

  const getFormattedDate = (date: Date) => {
    const dayName = format(date, 'eeee', { locale: ptBR });
    const day = format(date, 'dd');
    const monthName = format(date, 'MMMM', { locale: ptBR });
    const year = format(date, 'yyyy');
    
    return `${dayName.charAt(0).toUpperCase() + dayName.slice(1)}, ${day} de ${monthName.charAt(0).toUpperCase() + monthName.slice(1)} de ${year}`;
  };

  const formattedDate = getFormattedDate(today);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Image
          src={FocalPoint}
          alt="Imagem logo da FocalPoint"
        />
      </div>
      <div className={styles.message}>
        <p>Bem-vindo de volta, Marcus</p>
      </div>
      <div className={styles.date}>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
}
