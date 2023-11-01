import { useEffect, useState } from "react";

function useLocalStorage(initialValue, key) {
  const getValue = () => {
    const storage = localStorage.getItem(key);

    if (storage) {
      return JSON.parse(storage);
    }
    return initialValue;
  };

  const [value, setValue] = useState(getValue);

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value))
  })

  return [value, setValue];
}

export default useLocalStorage;