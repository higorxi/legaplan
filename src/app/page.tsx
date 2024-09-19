import Header from "./components/header";
import TodoList from "./components/todolist";
import styles from '../app/styles/home.module.scss'; 
import { TaskProvider } from "./contexts/TaskContexts";

export default function Home() {
  return (
    <>
    <TaskProvider>
    <div className={styles.page}>  
      <div >
        <Header />
      </div>
      <div>
        <TodoList />
      </div>
    </div>
    </TaskProvider>
    </>
  );
}
