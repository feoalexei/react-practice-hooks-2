import { useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TYPES_TODO = { done: 'DONE', notDone: 'NOT_DONE', all: 'ALL' };

const Todos = () => {
  const [todos, setTodos] = useState([]);
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

  return (
    <div>
      <TodoForm onAddTodo={onAddTodo} />
      <TodoList todos={todos} onCheck={onCheck} />
    </div>
  );
};

export default Todos;
