import { useRef, useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

const TodoForm = ({ onAddTodo }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const firstTodoRef = useRef(null);

  useEffect(() => {
    firstTodoRef.current.focus();
  }, []);

  const actions = { title: setTitle, description: setDescription };

  const handleChange = e => {
    const { name, value } = e.target;
    actions[name](value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const todo = { id: nanoid(10), title, description, isDone: false };
    onAddTodo(todo);
    handleReset();
  };

  const handleReset = () => {
    Object.values(actions).forEach(item => item(''));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={firstTodoRef}
        onChange={handleChange}
        type="text"
        placeholder="Enter title"
        name="title"
        value={title}
      />
      <input
        onChange={handleChange}
        type="text"
        placeholder="Enter description"
        name="description"
        value={description}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default TodoForm;
