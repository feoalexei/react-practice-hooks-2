import { useContext, useEffect, useState } from 'react';
import { ref, set, onValue } from 'firebase/database';
import { nanoid } from 'nanoid';
import { database } from '../../services/firebase.config';
import { UserContext } from 'components/UserContext/UserContext';
import { FaUser } from 'react-icons/fa';

const Chat = () => {
  const { user } = useContext(UserContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = ref(database, 'messages');
    onValue(messagesRef, snapshot => {
      const data = snapshot.val();
      console.log(data);
      const formattedData = Object.entries(data).map(entry => ({
        id: entry[0],
        ...entry[1],
      }));
      setMessages(formattedData);
    });
    return () => {};
  }, []);

  const sendMessage = e => {
    e.preventDefault();
    set(ref(database, 'messages/' + nanoid(10)), {
      username: user.displayName,
      email: user.email,
      message: e.target.elements[0].value,
    });
  };

  return (
    <>
      <form onSubmit={sendMessage}>
        <input type="text" />
        <button>Send</button>
      </form>
      <ul>
        {messages.map(({ id, email, message, username }) => (
          <li key={id}>
            <FaUser />
            <strong>{username}</strong> <span>{email}</span>
            <p>{message}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Chat;
