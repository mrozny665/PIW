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
import UserHotels from "./Pages/UserHotels";
import { readAllHotels } from "./data/hotelsService";
import { useUser } from "./data/userService";
import NavigationOut from "./Components/NavigationOut";
import Signup from "./Pages/Signup";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayout />}>
			<Route path="" element={<Hotels />} />
			<Route path="hotel/:id" element={<HotelPage />} />
			<Route path="login" element={<Login />} />
			<Route path="myoffers" element={<UserHotels />} />
			<Route path="signup" element={<Signup />} />
		</Route>
	)
);

function AppLayout() {
	const [hotels, setHotels] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const user = useUser();

	useEffect(() => {
		readAllHotels().then((docs) => setHotels(docs));
	});

	return (
		<div className="App">
			{!!user || <NavigationOut />}
			{!!user && <Navigation set={setIsOpen} />}
			<Outlet context={[hotels, setHotels]} />
			{isOpen && (
				<AddNewHotel set={setIsOpen} hotels={hotels} setHotels={setHotels} />
			)}
		</div>
	);
}

const App = () => <RouterProvider router={router} />;

export default App;
