import { useOutletContext, useParams } from "react-router-dom";
import emptyHeart from "../Assets/emptyHeart.svg";
import fullHeart from "../Assets/fullHeart.svg";
import iconMail from "../Assets/🦆 icon _mail_.png";
import { useContext } from "react";
import MailContext from "../contexts/mailContext";

const HotelPage = () => {
	const [hotels, setHotels, favorite, setFavorite] = useOutletContext();
	const { isMailOpen, setIsMailOpen } = useContext(MailContext);
	const { id } = useParams();

	const findElement = (el) => {
		return el.id === id;
	};

	const element = hotels.find(findElement);

	const isFavorite = !(favorite.find(findElement) === undefined);

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

	const addToFavorites = () => {
		const favs = [...favorite];
		favs.push(element);
		setFavorite(favs);
	};

	const removeFromFavorites = () => {
		const favs = [...favorite];
		const i = favs.findIndex(findElement);
		favs.splice(i, 1);
		setFavorite(favs);
	};

	return (
		<div>
			<section id="hotel" class="grid hotel-section">
				<section class="header-text">
					<p class="title-large">{element.name}</p>
				</section>
				<div class="hotel-image-container">
					{!isFavorite && (
						<p class="chip" onMouseDown={() => addToFavorites()}>
							Add to favorites <img src={emptyHeart} />
						</p>
					)}
					{isFavorite && (
						<p class="chip" onMouseDown={() => removeFromFavorites()}>
							Remove from favorites <img src={fullHeart} />
						</p>
					)}
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
					<button
						class="button primary"
						style={{ width: "fit-content" }}
						onMouseDown={() => setIsMailOpen(true)}
					>
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
