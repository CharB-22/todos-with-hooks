import React from "react";
import TodoItem from "./TodoItem";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

export default function TodoList (props) {
    console.log(props)
    return(
        <Paper>
            <List>
                {props.todos.map((todo) => 
                <>
                        <TodoItem key={todo.id} task={todo.task} completed={todo.completed}/>
                <Divider/>
                </>
                )}
            </List>
        </Paper>
    )
}