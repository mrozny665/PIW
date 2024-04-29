import HotelCard from "../Components/HotelCard";
import Navigation from "../Components/Navigation";
import startingHotels from "../data";

const Hotels = () => {
	const hotelCards = startingHotels.map((it) => (
		<HotelCard key={it.id} element={it} />
	));

	return (
		<div>
			<Navigation />
			<section id="browse" class="browse-section">
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
