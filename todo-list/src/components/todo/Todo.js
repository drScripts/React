import "./Todo.css";
import TodoList from "../todo-list/TodoList";
import Form from "../form/Form";
import { useState } from "react";

const Todo = () => {
  const [getTodos, setTodos] = useState([]);

  const handleRefreshSubmit = (todo) => {
    setTodos(getTodos.concat(todo));
  };

  return (
    <div>
      <h3>Todo List</h3>
      <Form onAdd={handleRefreshSubmit} />
      <TodoList data={getTodos} />
    </div>
  );
};

export default Todo;
