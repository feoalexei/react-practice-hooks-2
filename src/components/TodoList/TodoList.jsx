import { Link } from 'react-router-dom';

const TodoList = ({ todos, onCheck }) => {
  return (
    <ul className="list-unstyled">
      {todos.map(({ id, title, description, isDone }) => (
        <li key={id} className="d-flex gap-3 align-items-center">
          <input
            type="checkbox"
            checked={isDone}
            onChange={() => onCheck(id)}
          />
          <h4 className="mb-0">{title}</h4>
          <p className="flex-grow-1 mb-0">{description}</p>

          <Link to={`delete/${id}`}>Delete</Link>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
