import React from "react";
import useInputState from "./hooks/useInputState";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';



export default function TodoForm({saveTodo}) {
    const [todo, handleChange, handleSubmit] = useInputState("")
    return(
        <form>
            <Input value={todo} onChange={handleChange} defaultValue="Add your todo here" inputProps={{ 'aria-label': 'description' }} />
            <Button onClick={handleSubmit} variant="contained" color="secondary">
                Add
            </Button>
        </form>
    )
}