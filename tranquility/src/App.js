import "./style.css";
import startingHotels from "./data";
import Hotels from "./Pages/Hotels";
import { useEffect, useState } from "react";
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
import Login from "./Pages/Login";
import { readAllHotels } from "./data/hotelsService";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayout />}>
			<Route path="" element={<Hotels />} />
			<Route path="hotel/:id" element={<HotelPage />} />
			<Route path="login" element={<Login />} />
		</Route>
	)
);

function AppLayout() {
	const [hotels, setHotels] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		readAllHotels().then((docs) => setHotels(docs));
	});

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
