import useLS from 'hooks/useLS';
import { Button } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';

const ModalDelete = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [todos, setTodos] = useLS('KeyTodos', []);

  const handleDelete = () => {
    setTodos(todos.filter(todo => todo.id !== id));
    setTimeout(() => {
      navigate('/todo');
    }, 400);
  };

  return (
    <div className="border border-secondary rounded-2 p-4">
      <p>Do you really want to delete the task?</p>
      <div className="d-flex justify-content-center">
        <Button className="me-2 btn-danger" onClick={handleDelete}>
          Delete
        </Button>
        <Link to="/todo">
          <Button>Cancel</Button>
        </Link>
      </div>
    </div>
  );
};

export default ModalDelete;
