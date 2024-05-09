import Navigation from "../Components/Navigation";
import { useParams } from "react-router-dom";
import startingHotels from "../data";
import emptyHeart from "../Assets/emptyHeart.svg";
import iconMail from "../Assets/🦆 icon _mail_.png";

const HotelPage = () => {
	const { id } = useParams();

	const findElement = (el) => {
		return el.id == id;
	};

	const element = startingHotels.find(findElement);

	const stars = () => {
		let span = "";
		for (let i = 0; i < element.stars; i++) {
			span += "★";
		}
		for (let i = element.stars; i < 5; i++) {
			span += "☆";
		}
		return <span>{span}</span>;
	};

	return (
		<div>
			<Navigation />
			<section id="hotel" class="grid hotel-section">
				<section class="header-text">
					<p class="title-large">{element.name}</p>
				</section>
				<div class="hotel-image-container">
					<p class="chip">
						Add to favorites <img src={emptyHeart} />
					</p>
				</div>
				<article class="hotel-details">
					<section class="hotel-details-details">
						<p class="text-small">
							<span class="text-small-bold">Location:</span> {element.city}
						</p>
						<p class="text-small">
							<span class="text-small-bold">Local category:</span>
							{stars()}
						</p>
						<p class="text-small">
							<span class="text-small-bold">Price:</span> {element.price}
							€/room/night
						</p>
						<p class="text-small">
							<span class="text-small-bold">Description:</span>
							<br />
							<br />
							{element.longText}
						</p>
					</section>
					<button class="button primary" style={{ width: "fit-content" }}>
						Contact <img src={iconMail} />
					</button>
					<section class="hotel-details-cards">
						<div class="card-image"></div>
						<div class="card-image"></div>
					</section>
				</article>
			</section>
		</div>
	);
};

export default HotelPage;
