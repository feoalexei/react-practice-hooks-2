import { useContext, useEffect, useState } from 'react';
import { ref, set, onValue } from 'firebase/database';
import { nanoid } from 'nanoid';
import { database } from '../../services/firebase.config';
import { UserContext } from 'components/UserContext/UserContext';
import { FaUserCircle } from 'react-icons/fa';

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
        <div class="input-group mt-4">
          <input type="text" class="form-control" />
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
      <ul className="d-flex flex-column gap-2 list-unstyled">
        {messages.map(({ id, email, message, username }) => (
          <li key={id} className="border border-primary rounded-2 p-3">
            <div className="d-flex align-itmes-center gap-2 border-bottom pb-2 mb-3">
              <FaUserCircle
                style={{
                  fill: 'steelblue',
                  fontSize: '40px',
                }}
              />
              <div className="d-flex flex-column">
                <strong className="lh-sm">{username}</strong>{' '}
                <span className="text-muted lh-sm">{email}</span>
              </div>
            </div>

            <p>{message}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Chat;
