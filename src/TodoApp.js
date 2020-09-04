import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import {useState} from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

export default function TodoApp() {
    const initialTodos = [
        {id: 1, task: "Walk dog", completed: false},
        {id: 2, task: "Wash Car", completed: true},
        {id: 3, task: "Clean FishTank", completed: false},
        {id: 4, task: "Prepare Dinner", completed: false}
      ]

      const [todos, setTodos] = useState(initialTodos)

      //Have a function to add the todos created in the form to the states
      const addTodo = (newTodoText) => {
          // Concatenate the new value to the already existing array of todos
        setTodos([...todos, {id: 4, task: newTodoText, completed: false}]);
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
                    <TodoList todos = {todos}/>
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