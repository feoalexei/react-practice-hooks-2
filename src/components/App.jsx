import { useContext } from 'react';
import styled from 'styled-components';
import Todos from './Todos';
import AuthPage from './AuthPage/AuthPage';
import { UserContext } from './UserContext/UserContext';

export const App = () => {
  const { user } = useContext(UserContext);
  return <Container>{!user ? <AuthPage /> : <Todos />}</Container>;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;
