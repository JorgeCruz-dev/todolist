import { Button } from "@mui/material";
import { useContext } from "react";
import { TodoContext } from "../TodoContext";
import "./CreateTodoButton.css";

function CreateTodoButton() {
    const {setOpenModal} = useContext(TodoContext);
    return (
        <>
            <Button className="CreateTodoButton" onClick={() => { 
                setOpenModal(state => !state) 
                }}variant="contained">+</Button>
            <br />
        </>
    );
}

export { CreateTodoButton }