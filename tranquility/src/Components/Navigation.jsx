import logo from "../Assets/logo.svg";
import { NavLink } from "react-router-dom";

const Navigation = ({ set }) => {
	const openAdd = () => {};

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
				<button className="button primary">Log out</button>
			</ul>
		</nav>
	);
};

export default Navigation;
