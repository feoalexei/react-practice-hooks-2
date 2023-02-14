import styled from 'styled-components';
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
