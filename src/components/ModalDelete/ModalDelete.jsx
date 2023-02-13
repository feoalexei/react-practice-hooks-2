import useLS from 'hooks/useLS';
import { Button } from 'react-bootstrap';
import { Link, useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
    <Modal>
      <p>Do you want to delete?</p>
      <Button className="me-2" onClick={handleDelete}>
        Delete
      </Button>
      <Link to="/todo">
        <Button>Cancel</Button>
      </Link>
    </Modal>
  );
};

const Modal = styled.div`
  width: 200px;
  height: 200px;
  background-color: lightgrey;
  padding: 20px;
`;
export default ModalDelete;
