import styles from "./ToDoPage.module.sass";
import ToDoForm from "../../components/ToDoForm";
import ToDoList from "../../components/ToDoList";

function ToDoPage() {
  return (
    <div className={styles.pageContainer}>
      <h1>ToDoPage</h1>
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default ToDoPage;
