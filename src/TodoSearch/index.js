import { useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoSearch () {
    const {searchValue, setSearchValue} = useContext(TodoContext);
    return (
        <input 
            placeholder="Cortar cebolla" 
            type="text"
            value={searchValue}
            onChange={event => {
                console.log("Escribiste en el search")
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch }