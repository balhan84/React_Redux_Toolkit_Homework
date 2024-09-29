import styles from "./ToDoListItem.module.sass";
import { FaRegTrashAlt } from "react-icons/fa";
import { removeTask } from "../../../store/slices/toDoListSlice";
function ToDoListItem({ task: { id, isDone, taskName }, remove }) {
  return (
    <div className={styles.taskItem}>
      <li className={styles.taskName}>
        <h3>{taskName}</h3>
        <p className={styles.taskDone}>{isDone}</p>
      </li>
      <button onClick={() => remove(id)}>
        <FaRegTrashAlt />
      </button>
    </div>
  );
}

export default ToDoListItem;
