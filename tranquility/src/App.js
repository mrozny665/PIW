// import "./App.css";
import "./style.css";
import startingHotels from "./data";
import Home from "./Pages/home";
import New from "./Pages/New";
import Hotels from "./Pages/Hotels";
import { useState } from "react";

function App() {
	const [hotels, setHotels] = useState(startingHotels);

	return (
		<div className="App">
			<Hotels />
		</div>
	);
}

export default App;
