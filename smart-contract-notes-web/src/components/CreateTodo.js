// src/components/CreateTodo.js
import { useState } from "react";

const CreateTodo = ({ contract }) => {
  const [task, setTask] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    // invoke the smart contract's create method
    const todo = await contract.create({ task });
    setTask("");
    setLoading(false);

    // print the todo to the console

  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a Note"
        value={task}
        onChange={({ target }) => setTask(target.value)}
      />
      <button disabled={loading}>Create Note</button>
    </form>
  );
}

export default CreateTodo;
