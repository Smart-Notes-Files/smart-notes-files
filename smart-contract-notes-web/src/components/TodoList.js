// src/components/TodoList.js
import { useEffect, useState } from "react";
import { Todo } from "./Todo";

const PER_PAGE_LIMIT = 3;

const TodoList = ({ contract }) => {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    let offset; 
    if(page < 1) {
      setPage(1);
      offset = 0;
    } else {
      offset = (page - 1) * PER_PAGE_LIMIT;
    }

    // every second after the component first mounts
    // update the list of todos by invoking the get
    // method on the smart contract
    const id = setInterval(() => {
      contract
        .get({ offset, limit: PER_PAGE_LIMIT })
        .then((todos) => setTodos(todos));
    }, 1000);

    return () => clearInterval(id);
  }, [page, contract]);

  return (
    <>
		<table className="table table-hover">
			<thead>
				<tr>
					<th scope="col">-</th>
					<th scope="col">Notes</th>
					<th scope="col">-</th>
				</tr>
			</thead>
			<tbody>
					{todos.map((todo) => (
						<tr class="table-light" key={todo.id}>
						  <Todo contract={contract} {...todo} />
						</tr>
					  ))}
				
			</tbody>
		</table>
      <div className="flex">
      Current Page: {page}
      </div>
      <button className="btn btn-outline-primary" onClick={() => setPage((page) => page - 1)}>&lt;</button>
      {" "}
      <button className="btn btn-outline-primary" onClick={() => setPage((page) => page + 1)}>&gt;</button>
     </>
  );
}

export default TodoList;
