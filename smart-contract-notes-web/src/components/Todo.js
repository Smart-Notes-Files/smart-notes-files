// src/components/Todo.js
import { useState } from "react";

export function Todo({ contract, id, task, done }) {
  const [checked, setChecked] = useState(done);
  
  const complete = ({ target }) => {
    setChecked(target.checked);
    contract.update({ id, updates: { task, done: target.checked } });
  };

  const del = () => {
    // on clicking the delete button invoke the del method on
    // the smart contract
    contract.del({ id });
  };

  return (
    <>
     <th scope="row" class="col-2"><input type="checkbox" checked={checked} onChange={complete} /></th>
	<td class="col-8">{task}</td>
	<td class="col-2"><button class="btn btn-sm btn-danger" onClick={del}>Delete</button></td>
    </>
  );
}
