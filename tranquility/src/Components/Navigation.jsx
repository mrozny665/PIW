import logo from "../Assets/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../data/userService";
import { logout } from "../data/userService";
import startingHotels from "../data";
import { createHotel } from "../data/hotelsService";
import { useContext } from "react";
import AddContext from "../contexts/addContext";

const Navigation = () => {
	const { isAddOpen, setIsAddOpen } = useContext(AddContext);
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
						onMouseDown={() => setIsAddOpen(true)}
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
					onMouseDown={() => {
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
