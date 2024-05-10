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
} from "react-router-dom";
import HotelPage from "./Pages/HotelPage";
import Navigation from "./Components/Navigation";
import AddNewHotel from "./Components/AddNewHotel";

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
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="App">
			<Navigation set={setIsOpen} />
			<Outlet context={[hotels, setHotels]} />
			{isOpen && (
				<AddNewHotel set={setIsOpen} hotels={hotels} setHotels={setHotels} />
			)}
		</div>
	);
}

const App = () => <RouterProvider router={router} />;

export default App;
