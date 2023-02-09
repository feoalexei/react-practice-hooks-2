import { TYPES_TODO } from 'components/Todos';

const TodoSelect = ({ changeType }) => {
  return (
    <select onChange={changeType}>
      {Object.values(TYPES_TODO)
        .reverse()
        .map(key => (
          <option key={key} value={key}>
            {key}
          </option>
        ))}
    </select>
  );
};
export default TodoSelect;
