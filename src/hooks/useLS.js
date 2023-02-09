import { useState, useEffect } from 'react';

const useLS = (key, value) => {
  const [storage, setStorage] = useState(
    JSON.parse(localStorage.getItem(key)) ?? value
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storage));
  }, [storage, key]);

  return [storage, setStorage];
};

export default useLS;
