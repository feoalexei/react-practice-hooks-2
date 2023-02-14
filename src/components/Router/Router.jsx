import AuthPage from 'pages/AuthPage/AuthPage';
import Chat from 'pages/Chat/Chat';
import Todo from 'pages/Todo/Todo';
import { Route, Routes } from 'react-router-dom';
import TodoForm from 'components/TodoForm';
import ModalDelete from 'components/ModalDelete/ModalDelete';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="todo" element={<Todo />}>
        <Route path="add" element={<TodoForm />} />
        <Route path="delete/:id" element={<ModalDelete />} />
      </Route>
      <Route path="chat" element={<Chat />} />
    </Routes>
  );
};
export default Router;
