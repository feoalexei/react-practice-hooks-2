import { Link } from 'react-router-dom';

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
          <Link to={`delete/${id}`}>Delete</Link>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
