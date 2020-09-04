import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';



export default function TodoForm(props) {
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTodo(todo);
        reset();
    }
    const [todo, handleChange, reset] = useInputState("")
    return(
            <Paper style={{margin: "1rem 0", padding: "0 1rem"}}>
                <form onSubmit={handleSubmit}>
                    <TextField margin="normal" label="Add your todo" fullWidth value={todo} onChange={handleChange}  />
                </form>
            </Paper>
    )
}