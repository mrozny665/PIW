import logo from "../Assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../data/userService";
import { logout } from "../data/userService";
import startingHotels from "../data";
import { createHotel } from "../data/hotelsService";

const Navigation = ({ set }) => {
	const openAdd = () => {};
	const user = useUser();
	const navigate = useNavigate();

	return (
		<nav className="fixed-navigation">
			<img className="logo" src={logo} />
			<ul className="nav-links">
				<li>
					<a className="nav-link" href="#home">
						Home
					</a>
				</li>
				<li>
					<NavLink className="nav-link" to="/">
						Find offers
					</NavLink>
				</li>
				<li>
					<a
						className="nav-link"
						onClick={() => set(true)}
						style={{ cursor: "pointer" }}
					>
						Add new offers
					</a>
				</li>
				<li>
					<NavLink className="nav-link" to="myoffers" relative="path">
						My offers
					</NavLink>
				</li>
				<li>
					<a className="nav-link" href="#favorites">
						Favorites
					</a>
				</li>
				<button
					class="button primary"
					onClick={() => {
						logout();
						navigate("/");
					}}
				>
					Logout
				</button>
			</ul>
		</nav>
	);
};

export default Navigation;
