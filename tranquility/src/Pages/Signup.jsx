import { useState } from "react";
import { loginEmail, loginGoogle, signInEmail } from "../data/userService";
import { useNavigate, NavLink } from "react-router-dom";

const Signup = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState();
	const [password, setPassword] = useState();

	return (
		<main className="main-center" style={{ paddingTop: "100px" }}>
			<label htmlFor="email">Email</label>
			<input
				id="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<label htmlFor="password">Password</label>
			<input
				id="password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<br></br>
			<button
				className="button primary"
				onClick={() => signInEmail(navigate, email, password)}
			>
				Signup with email
			</button>
			<label htmlFor="login-button">
				If you already have an account or want to use your Google account:
			</label>
			<NavLink to="../login" class="link-button" id="login-button">
				<button class="button primary">Log in</button>
			</NavLink>
		</main>
	);
};

export default Signup;
