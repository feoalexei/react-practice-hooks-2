import { useRef, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import useLS from 'hooks/useLS';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const firstTodoRef = useRef(null);
  const [todos, setTodos] = useLS('KeyTodos', []);

  const location = useLocation();
  console.log(location);

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
    setTodos([...todos, todo]);
    handleReset();
  };

  const handleReset = () => {
    Object.values(actions).forEach(item => item(''));
  };

  return (
    <Form onSubmit={handleSubmit}>
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
      <Button type="submit" variant="primary">
        Add Todo
      </Button>
    </Form>
  );
};
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 20px;
`;

export default TodoForm;
