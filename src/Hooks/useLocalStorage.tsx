import { useEffect, useState } from "react";

export const useLocalStorage = (key: string, inicial: string) => {
  const [state, setState] = useState<string>(() => {
    const local = window.localStorage.getItem(key);
    return local ? JSON.parse(local) : inicial;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};