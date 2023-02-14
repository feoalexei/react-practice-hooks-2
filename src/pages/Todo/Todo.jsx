import { useContext } from 'react';
import Todos from 'components/Todos';
import { UserContext } from 'components/UserContext/UserContext';
import { Navigate } from 'react-router-dom';

const Todo = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      {/* <Outlet /> */}
      <Todos />
    </div>
  );
};

export default Todo;
