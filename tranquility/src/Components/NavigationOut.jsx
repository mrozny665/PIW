import logo from "../Assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useUser } from "../data/userService";
import { logout } from "../data/userService";
import startingHotels from "../data";
import { createHotel } from "../data/hotelsService";

const NavigationOut = () => {
	const openAdd = () => {};
	const user = useUser();

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
					<NavLink className="nav-link" to="/" relative="path">
						Browse
					</NavLink>
				</li>
				<li>
					<a className="nav-link" href="#myoffers">
						Rent with us
					</a>
				</li>
				<li>
					<NavLink className="nav-link" to="signup" relative="path">
						Sign up
					</NavLink>
				</li>
				<NavLink to="login" className="link-button" relative="path">
					<button class="button primary">Login</button>
				</NavLink>
			</ul>
		</nav>
	);
};

export default NavigationOut;
