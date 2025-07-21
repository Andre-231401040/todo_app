function Todo({ todo, index, deleteTodo }) {
  return (
    <div className="todo">
      <p>{`${index + 1}. ${todo}`}</p>
      <button onClick={() => deleteTodo(index)}>Delete</button>
    </div>
  );
}

export default Todo;
