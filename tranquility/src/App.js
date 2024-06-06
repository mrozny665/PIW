import "./style.css";
import Hotels from "./Pages/Hotels";
import { useContext, useEffect, useState } from "react";
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
import SendEmail from "./Components/SendEmail";
import AddContext from "./contexts/addContext";
import { AddProvider } from "./contexts/addContext";
import EditContext, { EditProvider } from "./contexts/editContext";
import { MailProvider } from "./contexts/mailContext";
import MailContext from "./contexts/mailContext";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={
				<AddProvider>
					<EditProvider>
						<MailProvider>
							<AppLayout />
						</MailProvider>
					</EditProvider>
				</AddProvider>
			}
		>
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
	const { isAddOpen } = useContext(AddContext);
	const { isEditOpen } = useContext(EditContext);
	const { isMailOpen } = useContext(MailContext);
	const user = useUser();
	// const fav1 = localStorage.getItem("favorite");
	// const fav2 = JSON.parse(fav1);

	// console.log(fav1);
	// console.log(fav2);

	// const [favorite, setFavorite] = useState(
	// 	JSON.parse(localStorage.getItem("favorite"))
	// );

	useEffect(() => {
		readAllHotels().then((docs) => setHotels(docs));
		// if (favorite == "") setFavorite([]);
	}, []);

	// useEffect(() => {
	// 	localStorage.setItem("favorite", JSON.stringify(favorite));
	// 	setFavorite(JSON.parse(localStorage.getItem("favorite")));
	// }, [favorite]);

	return (
		<div className="App">
			{!!user || <NavigationOut />}
			{!!user && <Navigation />}
			<Outlet context={[hotels, setHotels]} />
			{isAddOpen && <AddNewHotel hotels={hotels} setHotels={setHotels} />}
			{isEditOpen && <EditHotel hotels={hotels} setHotels={setHotels} />}
			{isMailOpen && <SendEmail />}
		</div>
	);
}

const App = () => <RouterProvider router={router} />;

export default App;
