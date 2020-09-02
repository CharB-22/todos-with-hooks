import React from "react";

export default function TodoList (props) {

    return(
        <ul>
            {props.todos.map((todo) => <li key={todo.id}>{todo.task}</li>)}
        </ul>

    )
}