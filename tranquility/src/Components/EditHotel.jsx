import { useEffect, useState } from "react";
import { createHotel, updateHotel } from "../data/hotelsService";
import { useParams } from "react-router-dom";

const EditHotel = ({ set, hotels }) => {
	const [hotelName, setHotelName] = useState("");
	const [description, setDescription] = useState("");
	const [location, setLocation] = useState("");
	const [price, setPrice] = useState("");
	const [localCategory, setLocalCategory] = useState("");
	const { id } = useParams();

	const hotelData = hotels.find((el) => {
		return id === el.id;
	});

	const editHotel = () => {
		const hotel = {
			name: hotelName,
			text: description,
			longText: description,
			price: price,
			stars: localCategory,
			city: location,
		};
		updateHotel(id, hotel);
		set(false);
	};

	const init = () => {
		setHotelName(hotelData.name);
		setDescription(hotelData.text);
		setLocation(hotelData.city);
		setPrice(hotelData.price);
		setLocalCategory(hotelData.stars);
	};

	useEffect(() => {
		init();
	}, []);

	return (
		<modal class="grid modal">
			<section class="modal-content">
				<section class="modal-start">
					<p class="modal-close" onMouseDown={() => set(false)}>
						&times;
					</p>
					<p class="title-large">Edit offer</p>
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
						onMouseDown={() => {
							editHotel();
						}}
					>
						Edit
					</button>
				</section>
			</section>
		</modal>
	);
};

export default EditHotel;
