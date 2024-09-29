import { connect } from "react-redux";
import ToDoListItem from "./ToDoListItem";
import { removeTask } from "../../store/slices/toDoListSlice";
import styles from "./ToDoList.module.sass";

function ToDoList({ tasks, remove }) {
  const mapTasksList = (t) => (
    <ToDoListItem key={t.id} task={t} remove={remove} />
  );
  return (
    <section className={styles.tasksListWrapper}>
      <ul>{tasks.map(mapTasksList)}</ul>
    </section>
  );
}

const mapStateToProps = ({ tasksList }) => tasksList;

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(removeTask(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
