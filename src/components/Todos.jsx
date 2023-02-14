import { useState, useMemo } from 'react';
import styled from 'styled-components';

import useLS from 'hooks/useLS';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoSelect from './TodoSelect';
import Navigation from './Navigation';
import { Link, Outlet } from 'react-router-dom';

export const TYPES_TODO = { done: 'DONE', undone: 'NOT_DONE', all: 'ALL' };

const Todos = () => {
  const [todos, setTodos] = useLS('KeyTodos', []);
  const [type, setType] = useState(TYPES_TODO.all);

  const onAddTodo = todo => {
    setTodos([todo, ...todos]);
  };

  const onCheck = id => {
    setTodos(
      todos.map(item =>
        id === item.id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const cacheSortedTodos = useMemo(() => {
    if (TYPES_TODO.all === type) return todos;
    if (TYPES_TODO.done === type) return todos.filter(item => item.isDone);
    if (TYPES_TODO.undone === type) return todos.filter(item => !item.isDone);
  }, [todos, type]);

  const changeType = e => {
    setType(e.target.value);
    console.log(e.target.value);
  };
  return (
    <TodoBox>
      <Navigation />
      {/* <TodoForm onAddTodo={onAddTodo} /> */}
      <Link to="add" state={{ a: onAddTodo }}>
        Add Todo Form
      </Link>
      <Outlet />
      <TodoSelect changeType={changeType} />
      <TodoList todos={cacheSortedTodos} onCheck={onCheck} />
    </TodoBox>
  );
};

const TodoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
`;

export default Todos;
