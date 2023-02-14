import { useContext } from 'react';
import styled from 'styled-components';
import Todos from './Todos';
import AuthPage from '../pages/AuthPage/AuthPage';
import { UserContext } from './UserContext/UserContext';
import Router from './Router/Router';

export const App = () => {
  return (
    <Container>
      <Router />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
`;
