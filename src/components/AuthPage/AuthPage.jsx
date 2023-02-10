import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import { UserContext } from 'components/UserContext/UserContext';
import styled from 'styled-components';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../../services/firebase.config';

const provider = new GoogleAuthProvider();

function AuthPage() {
  const { setUser } = useContext(UserContext);

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.elements);
  };

  const authByGoogle = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      setUser(user);
    } catch (error) {}
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" className="me-2">
          Submit
        </Button>
        <Button onClick={authByGoogle} variant="success" type="button">
          Sign in via Google
        </Button>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 1px solid gray;
`;

export default AuthPage;
