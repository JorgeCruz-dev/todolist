import { useState, useEffect } from "react";
//Custom Hook
function useLocalStorage(itemName, initialValue) {
  
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
    
        let parsedItem;
        if(!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  },[]);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {item, saveItem, loading, error}
}

// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Cortar Cebolla', completed: true},
//   { text: 'Tomar el Curso de Intro a React.js', completed: false},
//   { text: 'Llorar con la Llorona', completed: false},
//   { text: 'LALALALALALA', completed: false},
//   { text: 'Le gu', completed: true},
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

export { useLocalStorage }