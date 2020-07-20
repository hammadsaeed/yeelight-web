import { useState, useEffect } from 'react';

const useStateWithLocalStorage = (localStorageKey: string): [string, Function] => {
  const [value, setValue] = useState(
    localStorage.getItem(localStorageKey) || '',
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, value);
  }, [value, localStorageKey]);

  return [value, setValue];
};

export default useStateWithLocalStorage;
