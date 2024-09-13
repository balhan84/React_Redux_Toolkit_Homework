function ToDoListItem({ task: { isDone, taskName } }) {
  return (
    <li>
      <h3>{taskName}</h3>
    </li>
  );
}

export default ToDoListItem;
