import { useState } from "react";

const AddNewHotel = ({ set, hotels, setHotels }) => {
	const [hotelName, setHotelName] = useState("");
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");
	const [price, setPrice] = useState("");
	const [localCategory, setLocalCategory] = useState("");

	const addHotel = () => {
		const hotel = {
			id: hotels.length + 1,
			name: hotelName,
			text: description,
			longText: description,
			price: price,
			stars: localCategory,
			city: location,
		};
		const hotelList = hotels;
		setHotels(hotelList.concat([hotel]));
	};

	return (
		<modal class="grid modal">
			<section class="modal-content">
				<section class="modal-start">
					<p class="modal-close">&times;</p>
					<p class="title-large">Add new offer</p>
				</section>
				<section class="modal-section">
					<label>Hotel name</label>
					<input
						placeholder="Provide the hotel name"
						class="modal-input"
						value={hotelName}
						onChange={(e) => setHotelName(e.target.value)}
					></input>
				</section>
				<section className="modal-section">
					<label>Description</label>
					<textarea
						class="modal-text"
						placeholder="Add a description of yout hotel"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					></textarea>
				</section>
				<section className="modal-section">
					<section className="modal-section">
						<label>Location</label>
						<input
							placeholder="City"
							className="modal-input"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
						></input>
					</section>
					<section className="modal-section">
						<label>Price</label>
						<input
							placeholder="Cost per room per night"
							className="modal-input"
							value={price}
							onChange={(e) => setPrice(e.target.value)}
						></input>
					</section>
					<section className="modal-section">
						<label>Local category</label>
						<input
							placeholder="Max 5 stars, min 1 star"
							className="modal-input"
							value={localCategory}
							onChange={(e) => setLocalCategory(e.target.value)}
						></input>
					</section>
				</section>
				<section class="modal-buttons">
					<p class="button" onClick={() => set(false)}>
						Cancel
					</p>
					<button
						class="primary button"
						onClick={() => {
							addHotel();
						}}
					>
						Add
					</button>
				</section>
			</section>
		</modal>
	);
};

export default AddNewHotel;
