import Todo from "./Todo";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todo-list">
      {todos.map((todo, index) => {
        return <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}

export default TodoList;
