import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Define a React component called ToDoList
export default function ToDoList() {
    // Define state variables using the useState hook:
    // todos: An array containing the list of tasks, initialized with a sample task
    // setTodos: A function to update the todos state
    let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4(), isDone: false }]);

    // newTodo: A string representing the value of the input field for adding new tasks
    // setNewTodo: A function to update the newTodo state
    let [newTodo, setNewTodo] = useState("");

    // Define a function addNewTask, triggered when the Add Task button is clicked
    let addNewTask = () => {
        // Update the todos state by adding a new task from newTodo and resetting newTodo to an empty string
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
        });
        setNewTodo("");
    };

    // Define a function updateTodoValue, triggered when the input field changes
    let updateTodoValue = (event) => {
        // Update the newTodo state with the current value of the input field
        setNewTodo(event.target.value);
    }

    // Define a function deleteTodo, triggered when the Delete button for a task is clicked
    let deleteTodo = (id) => {
        // Remove the task with the specified id from the todos state
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));
    }

    // let upperCaseOne = (id) => {
    //     setTodos((prevTodos) =>
    //         prevTodos.map((todo) => {
    //             if (todo.id === id) {
    //                 return {
    //                     ...todo, task: todo.task.toUpperCase(),
    //                 };
    //             } else {
    //                 return todo;
    //             }
    //         })
    //     );
    // };

    // Define a function markAsDone, triggered when the Mark as Done button for a task is clicked
    let markAsDone = (id) => {
        // Mark the task with the specified id as done by updating the isDone property
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo, isDone: true,
                    };
                } else {
                    return todo;
                }
            })
        );
    };

    // Define a function markAsAll, triggered when the Mark all Done button is clicked
    let markAsAll = () => {
        // Mark all tasks as done by updating the isDone property for each task
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo, isDone: true,
                };
            })
        );
    };

    // Render the component UI
    return (
        <div>
            <h1>To-Do List</h1>
            {/* Input field for adding new tasks */}
            <input placeholder="Add a Task" value={newTodo} onChange={updateTodoValue}></input>
            {/* Button to add a new task */}
            <button onClick={addNewTask}>Add Task</button>
            <hr />
            <hr />
            <h3>Task To Do</h3>
            {/* List of tasks */}
            <ul>
                {
                    // Map over the todos array to create list items for each task
                    todos.map((todo) => (
                        <li key={todo.id}>
                            {/* Display the task, with a line-through style if it's marked as done */}
                            <span style={todo.isDone ? { textDecoration: "line-through" } : {}}>{todo.task}</span>
                            {/* Button to delete the task */}
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            {/* Button to mark the task as done */}
                            <button onClick={() => markAsDone(todo.id)}>Mark as Done</button>
                        </li>
                    ))
                }
            </ul>
            {/* Button to mark all tasks as done */}
            <button onClick={markAsAll}>Mark all Done</button>
        </div>
    );
};
