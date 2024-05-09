import fullHeart from "../Assets/fullHeart.svg";
import Arrow from "../Assets/Arrow.svg";
import { Link } from "react-router-dom";

const HotelCard = ({ element }) => {
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

	const link = "hotel/" + element.id;

	return (
		<article class="hotel-card">
			<div class="card-image">
				<p class="chip">{element.city}</p>
				<button class="heart">
					<img src={fullHeart} />
				</button>
			</div>
			<p class="text-middle">{element.name}</p>
			<p class="text-small">{element.text}</p>
			<div class="hotel-card-footer">
				<p class="text-middle">{stars()}</p>
				<p class="text-middle">{element.price}€/room</p>
			</div>
			<Link to={link} class="link-button">
				<button class="button primary" style={{ width: "100%" }}>
					View offer <img src={Arrow} />
				</button>
			</Link>
		</article>
	);
};

export default HotelCard;
