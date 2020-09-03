import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';



export default function TodoForm(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(todo);
        reset();
    }
    const [todo, handleChange, reset] = useInputState("")
    return(
            <Paper>
                <form onSubmit={handleSubmit}>
                    <TextField value={todo} onChange={handleChange} defaultValue="Add your todo here" inputProps={{ 'aria-label': 'description' }} />
                    <Button variant="contained" color="secondary">
                        Add
                    </Button>
                </form>
            </Paper>
    )
}