import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from '@material-ui/core/TextField';


function TodoEditForm({editTodo, id, task, toggleEditForm}) {
    const [value, handleChange, reset] = useInputState(task)
    return(
            <form onSubmit={(e) => {
                e.preventDefault();
                editTodo(id, value);
                reset();
                toggleEditForm();
            }}
            style={{marginLeft: "1rem", marginRight: "1rem", width: "100%"}}
            >
                <TextField autofocus margin="normal" value={value} fullWidth onChange={handleChange}/>
            </form>
    )
}

export default TodoEditForm;