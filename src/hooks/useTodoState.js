import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

export default initialTodos => {
    const [todos, setTodos] = useState(initialTodos);
    return {
        todos,
        addTodo: newTodoText => {
            setTodos([...todos, {id: uuidv4(), task: newTodoText, completed: false}]);
        },
        removeTodo: todoId => {
            const newTodos = todos.filter(todo => todo.id !== todoId);
            setTodos(newTodos)
        },
        toggleTodo: todoId => {
            const newTodos = todos.map(todo => 
                todo.id === todoId ? 
                {...todo, completed: !todo.completed} : todo
                );
            setTodos(newTodos)
        },
        editTodo: (todoId, newTask) => {
            const updatedTodos = todos.map (todo => todo.id === todoId ?
                {...todo, task: newTask } : todo
                )
                setTodos(updatedTodos)
        },
    }
}