import { useState } from "react";
import { loginEmail, loginGoogle } from "../data/userService";
import { useNavigate, NavLink } from "react-router-dom";

const Login = () => {
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
			<label htmlFor="pasword">Password</label>
			<input
				id="password"
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<br></br>
			<button
				className="button primary"
				onMouseDown={() => loginEmail(navigate, email, password)}
			>
				Login with email
			</button>

			<br />
			<br />
			<button
				className="button primary"
				onMouseDown={() => loginGoogle(navigate)}
			>
				Login with Google
			</button>
			<label htmlFor="signup-button">If you don't have an account yet:</label>
			<NavLink to="../signup" class="link-button" id="signup-button">
				<button class="button primary">Sign up</button>
			</NavLink>
		</main>
	);
};

export default Login;
