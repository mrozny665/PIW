// import "./App.css";
import "./style.css";
import startingHotels from "./data";
import Hotels from "./Pages/Hotels";
import { useState } from "react";
import {
	RouterProvider,
	Outlet,
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	NavLink,
} from "react-router-dom";
import HotelPage from "./Pages/HotelPage";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayout />}>
			<Route path="" element={<Hotels />} />
			<Route path="hotel/:id" element={<HotelPage />} />
		</Route>
	)
);

function AppLayout() {
	const [hotels, setHotels] = useState(startingHotels);

	return (
		<div className="App">
			<Outlet />
		</div>
	);
}

const App = () => <RouterProvider router={router} />;

export default App;
