import "./App.css";
import Home from "./Pages/home";
import New from "./Pages/New";
import { useState } from "react";

function App() {
	const [todos, setTodos] = useState([
		"Zrobić pranie",
		"Zrobić pizzę",
		"Napisać inżynierkę",
	]);

	return (
		<div className="App">
			<header className="App-header">Todo</header>
			<div class="main-nav-container">
				<nav>
					<a>Home</a>
					<a>New</a>
				</nav>

				<Home todos={todos} />
				<New todos={todos} setTodos={setTodos} />
			</div>
			<footer>Stopka</footer>
		</div>
	);
}

export default App;
