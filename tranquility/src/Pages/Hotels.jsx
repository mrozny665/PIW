import HotelCard from "../Components/HotelCard";
import Navigation from "../Components/Navigation";
import startingHotels from "../data";
import { Outlet, Link } from "react-router-dom";

const Hotels = () => {
	const hotelCards = startingHotels.map((it) => (
		<HotelCard key={it.id} element={it} />
	));

	return (
		<div>
			<Navigation />
			<section
				class="header-text"
				style={{ paddingTop: "100px", paddingLeft: "50px" }}
			>
				<p class="title-large">Welcome, your tranquility oasis awaits</p>
			</section>
			<section id="browse" class="browse-section">
				<p class="title-middle">Explore the hotels</p>
				<input
					class="searchbar"
					placeholder="Search by hotel name, place etc."
				/>
				<section class="grid hotel-cards">{hotelCards}</section>
			</section>
		</div>
	);
};

export default Hotels;
