import { connect } from "react-redux";
import ToDoListItem from "./ToDoListItem";

function ToDoList({ tasks }) {
  const mapTasksList = (t) => <ToDoListItem key={t.id} task={t} />;
  return (
    <section>
      <h2>ToDoList</h2>
      <ul>{tasks.map(mapTasksList)}</ul>
    </section>
  );
}

const mapStateToProps = ({ tasksList }) => tasksList;
export default connect(mapStateToProps)(ToDoList);
