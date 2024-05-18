import { useEffect, useState } from "react";
import { auth } from "./init";
import {
	GoogleAuthProvider,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const loginGoogle = async (navigate) => {
	const userCredentials = await signInWithPopup(auth, googleProvider);
	if (userCredentials.user) navigate("/");
};

export const loginEmail = async (navigate, email, password) => {
	const userCredentials = await signInWithEmailAndPassword(
		auth,
		email,
		password
	);
	if (userCredentials.user) navigate("/");
};

export const logout = async () => {
	signOut(auth);
};

export const useUser = () => {
	const [user, setUser] = useState(auth?.currentUser);

	useEffect(() => {
		auth.onAuthStateChanged((u) => setUser(u));
	}, []);

	return user;
};
