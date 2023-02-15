import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { authActions } from 'redux/auth/auth-actions';

const WelcomePage = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(authActions.logoutAction());
  };

  return (
    <div>
      <Button onClick={handleLogout} variant="outline-primary">
        Welcome
      </Button>
    </div>
  );
};
export default WelcomePage;
