import { UserContext } from 'components/UserContext/UserContext';
import { useContext } from 'react';
import { signOut } from 'firebase/auth';
import { Button } from 'react-bootstrap';
import { auth } from '../../services/firebase.config';

const Navigation = () => {
  const { user, setUser } = useContext(UserContext);

  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {}
  };

  return (
    <div className="d-flex align-items-baseline mt-5">
      <p>Hello {user.displayName}</p>
      <Button onClick={logOut} variant="success" type="button" className="ms-3">
        Log out
      </Button>
    </div>
  );
};

export default Navigation;
