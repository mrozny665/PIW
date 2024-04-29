import { useState } from "react";
import ListItem from "../Components/ListItem";

const New = ({ todos, setTodos }) => {
	const [newTodo, setNewTodo] = useState("");

	const todosHTML = todos.map((it) => <ListItem key={it} text={it} />);

	const handleAddNew = () => {
		setTodos(todos.concat([newTodo]));
		setNewTodo("");
	};

	return (
		<main>
			<input
				className="App-input"
				value={newTodo}
				onChange={(e) => setNewTodo(e.target.value)}
			/>
			<button class="App-mini-button" onClick={handleAddNew}>
				Add new TODO
			</button>
			{todosHTML}
		</main>
	);
};

export default New;
