import "./style.css";
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
import EditHotel from "./Components/EditHotel";
import HotelPageEditable from "./Pages/HotelPageEditable";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<AppLayout />}>
			<Route path="" element={<Hotels />} />
			<Route path="hotels/:id" element={<HotelPage />} />
			<Route path="login" element={<Login />} />
			<Route path="myoffers" element={<UserHotels />} />
			<Route path="signup" element={<Signup />} />
			<Route path="myoffers/:id" element={<HotelPageEditable />} />
		</Route>
	)
);

function AppLayout() {
	const [hotels, setHotels] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [isEditOpen, setIsEditOpen] = useState(false);
	const user = useUser();

	useEffect(() => {
		readAllHotels().then((docs) => setHotels(docs));
	}, []);

	return (
		<div className="App">
			{!!user || <NavigationOut />}
			{!!user && <Navigation set={setIsOpen} />}
			<Outlet context={[hotels, setHotels, setIsEditOpen]} />
			{isOpen && (
				<AddNewHotel set={setIsOpen} hotels={hotels} setHotels={setHotels} />
			)}
			{isEditOpen && (
				<EditHotel set={setIsEditOpen} hotels={hotels} setHotels={setHotels} />
			)}
		</div>
	);
}

const App = () => <RouterProvider router={router} />;

export default App;
