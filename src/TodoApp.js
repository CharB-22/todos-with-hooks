import React from "react";
import {useState} from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from 'uuid';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

export default function TodoApp() {
    const initialTodos = []

      const [todos, setTodos] = useState(initialTodos)

      //Have a function to add the todos created in the form to the states
      const addTodo = (newTodoText) => {
          // Concatenate the new value to the already existing array of todos
        setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}]);
      }

      const removeTodo = todoId => {
        const newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos)
      }

      const toggleTodo = todoId => {
          const newTodos = todos.map(todo => 
            todo.id === todoId ? 
            {...todo, completed: !todo.completed} : todo
            );
        setTodos(newTodos)
        console.log(newTodos)
      }

    return(
        <Paper
        style={{
            padding: 0,
            margin: 0,
            height: "100vh",
            backgroundColor: "#fafafa"
        }}
        elevation={0}
        >
            <AppBar color="primary" position="static" style={{height: "64px"}}>
                <Toolbar>
                    <Typography color="inherit">TODOS WITH HOOKS</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify="center" style={{marginTop: "1rem"}}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoList todos = {todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
                    <TodoForm addTodo = {addTodo}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

/*
<h1>My Todo List</h1>
<TodoList todos = {todos}/>
<TodoForm /> */