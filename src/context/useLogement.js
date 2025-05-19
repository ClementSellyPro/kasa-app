import { useContext } from 'react';
import { LogementContext } from './LogementContext';

const useLogement = () => {
  const context = useContext(LogementContext);
  if (!context) {
    throw new Error("useLogement must be used within a LogementProvider");
  }
  return context;
}

export default useLogement;