import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import { useContext } from 'react';

function TodoCounter() {
  const {totalTodos, completedTodos} = useContext(TodoContext);
    return (
      (totalTodos === completedTodos) 
      ? <h1>! Haz completado todos los pendientes! 🎊🎉🎆 </h1> 
      : <h1>Has completado {completedTodos} de {totalTodos} TODOS</h1>
    );
}

export { TodoCounter }
