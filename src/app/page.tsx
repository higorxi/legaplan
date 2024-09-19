import Header from "./components/header";
import TodoList from "./components/todolist";
import styles from '../app/styles/home.module.scss'; 

export default function Home() {
  return (
    <div className={styles.page}>  
      <div >
        <Header />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
  );
}
