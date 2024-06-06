import HotelCard from "../Components/HotelCard";
import { useOutletContext } from "react-router-dom";

const Hotels = () => {
	const edit = false;
	const [hotels, setHotels] = useOutletContext();
	const hotelCards = hotels.map((it) => (
		<HotelCard key={it.id} element={it} edit={edit} />
	));

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

export default Hotels;
