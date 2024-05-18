import "./App.css";
import Home from "./Pages/home";
import New from "./Pages/New";
import { useState } from "react";
import createBrowserRouter from

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayout />}>
			<Route path="" element={<Home />} />
			<Route path="new" element={<New />} />
		</Route>
	)
);

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
					<NavLink to="/">Home</NavLink>
					<NavLink to="new">New</NavLink>
				</nav>

				<Home todos={todos} />
				<New todos={todos} setTodos={setTodos} />
			</div>
			<footer>Stopka</footer>
		</div>
	);
}

export default App;
