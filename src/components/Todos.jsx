import { useState, useMemo } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoSelect from './TodoSelect';
import useLS from 'hooks/useLS';

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

  // const sortedTodos = () => {
  //   if (TYPES_TODO.all === type) return todos;
  //   if (TYPES_TODO.done === type) return todos.filter(item => item.isDone);
  //   if (TYPES_TODO.undone === type) return todos.filter(item => !item.isDone);
  // };

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
    <div>
      <TodoForm onAddTodo={onAddTodo} />
      <TodoSelect changeType={changeType} />
      <TodoList todos={cacheSortedTodos()} onCheck={onCheck} />
    </div>
  );
};

export default Todos;