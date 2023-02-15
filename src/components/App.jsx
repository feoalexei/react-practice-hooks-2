import { useContext } from 'react';
import styled from 'styled-components';
// import Todos from './Todos';
// import AuthPage from './AuthPage/AuthPage';
// import { UserContext } from './UserContext/UserContext';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import AuthPage from 'pages/AuthPage/AuthPage';
import { useSelector } from 'react-redux';

// export const App = () => {
//   const { user } = useContext(UserContext);
//   return <Container>{!user ? <AuthPage /> : <Todos />}</Container>;
// };
export const App = () => {
  const state = useSelector(state => state);

  return state.isAuth ? <WelcomePage /> : <AuthPage />;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;
