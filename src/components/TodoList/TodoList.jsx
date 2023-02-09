const TodoList = ({ todos, onCheck }) => {
  return (
    <ul>
      {todos.map(({ id, title, description, isDone }) => (
        <li key={id}>
          <h4>{title}</h4>
          <p>{description}</p>
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => onCheck(id)}
          />
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
