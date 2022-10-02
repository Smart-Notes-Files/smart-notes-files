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
    <form onSubmit={handleSubmit} >
                        
                            <div className="row">
                                <div className="col-8">
                                    <input type="text" className="form-text" placeholder="Enter a Note" value={task} onChange={({ target }) => setTask(target.value)} />
                                </div>
                                <div className="col-3">
                                    <button disabled={loading} className="btn btn-success">Create</button>
                                </div>
                            </div>
                    </form>
  );
}

export default CreateTodo;
