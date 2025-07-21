import { useState } from "react";
import "./MainPage.css";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

function MainPage() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (indexToDelete) => {
    setTodos(todos.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div>
      <InputForm addTodo={addTodo} />
      {todos.length === 0 ? <p style={{ textAlign: "center" }}>Belum ada todo.</p> : <TodoList todos={todos} deleteTodo={deleteTodo} />}
    </div>
  );
}

export default MainPage;
