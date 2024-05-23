import { useEffect, useState } from "react";
import HotelCard from "../Components/HotelCard";
import { readUserHotels } from "../data/hotelsService";

const UserHotels = () => {
	const edit = true;
	const [userHotels, setUserHotels] = useState([]);
	const hotelCards = userHotels.map((it) => (
		<HotelCard key={it.id} element={it} edit={edit} />
	));

	useEffect(() => {
		readUserHotels().then((docs) => setUserHotels(docs));
	});

	return (
		<div>
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

export default UserHotels;
