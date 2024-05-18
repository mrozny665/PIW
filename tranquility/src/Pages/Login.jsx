import { useState } from "react";
import { loginEmail, loginGoogle } from "../data/userService";
import { useNavigate } from "react-router-dom";

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
				onClick={() => loginEmail(navigate, email, password)}
			>
				Login with email
			</button>

			<br />
			<br />
			<button className="button primary" onClick={() => loginGoogle(navigate)}>
				Login with Google
			</button>
		</main>
	);
};

export default Login;
