import { useState } from "react";

function InputForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  return (
    <form>
      <input type="text" placeholder="Selesaikan proyek UAS" onChange={(e) => setTodo(e.target.value)} value={todo} />
      <button
        onClick={(e) => {
          e.preventDefault();
          addTodo(todo);
          setTodo("");
        }}
      >
        Add
      </button>
    </form>
  );
}

export default InputForm;
