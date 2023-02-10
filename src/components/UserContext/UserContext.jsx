import { createContext } from 'react';
import useLS from '../../hooks/useLS';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useLS('user_key', null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
