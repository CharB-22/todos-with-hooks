import React from "react";
import TodoItem from "./TodoItem";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

function TodoList ({todos, removeTodo, toggleTodo, editTodo}) {
    
    return(
        <Paper>
            <List>
                {todos.map((todo) => (
                // To add a key to a fragment, we have to use the long-hand version
                // rather than <> </>, we have to use <React.Fragment>
                <TodoItem
                    {...todo}
                    removeTodo={removeTodo}
                    toggleTodo={toggleTodo}
                    editTodo={editTodo}
                />
            ))}
            </List>
        </Paper>
    )
}

export default TodoList;