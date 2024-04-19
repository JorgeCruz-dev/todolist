import { createContext, useState } from "react";
import { useLocalStorage } from "../App/useLocalStorage";

const TodoContext = createContext();

function TodoProvider({children}) {
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);
  
    const completedTodos = todos.filter(todo => Boolean(todo.completed)).length;
    const totalTodos = todos.length;  
  
    const searchedTodos = todos.filter((todo) => { 
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        text,
        completed: false
      })
     saveTodos(newTodos);
    };
  
    const onComplete = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo)=> {
       return todo.text === text;
      });
      const oldStatus = newTodos[todoIndex].completed;
      newTodos[todoIndex].completed = oldStatus ? false : true;
      saveTodos(newTodos);
    };
  
    const onDelete = (text) => {
      const newTodos = [...todos];
      const todoIndex = newTodos.findIndex((todo)=> {
       return todo.text === text;
      });
      newTodos.splice(todoIndex, 1);
      saveTodos(newTodos);
    };
    
    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            onComplete,
            onDelete,
            openModal,
            setOpenModal,
            addTodo
        }}>
            { children }
        </TodoContext.Provider>
    );
}


export { TodoContext, TodoProvider }