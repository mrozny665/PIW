import logo from "../Assets/logo.svg";
import { NavLink } from "react-router-dom";
import { useUser } from "../data/userService";
import { logout } from "../data/userService";
import startingHotels from "../data";
import { createHotel } from "../data/hotelsService";

const Navigation = ({ set }) => {
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
					<a className="nav-link" href="#myoffers">
						My offers
					</a>
				</li>
				<li>
					<a className="nav-link" href="#favorites">
						Favorites
					</a>
				</li>
				{/* <button className="button primary">Log out</button> */}
				{!!user || (
					<NavLink to="login" className="link-button">
						<button class="button primary">Login</button>
					</NavLink>
				)}
				{!!user && (
					<button class="button primary" onClick={logout}>
						Logout
					</button>
				)}
			</ul>
		</nav>
	);
};

export default Navigation;
