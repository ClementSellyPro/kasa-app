import { createContext, useState, useEffect } from 'react';

const LogementContext = createContext(undefined);

const LogementProvider = ({children}) => {
  const [logementData, setLogementData] = useState([]);

  useEffect(() => {
    fetch("/logements.json")
    .then(response => response.json())
    .then(data => setLogementData(data))
    .catch(error => console.error("Error fetch logements: ", error));
  }, []);

  return (
    <LogementContext.Provider value={{ logementData }}>
      { children }
    </LogementContext.Provider>
  );
};

export { LogementContext, LogementProvider }