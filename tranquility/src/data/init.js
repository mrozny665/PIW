// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCsmJAUMiXNLj_k7KskNrTZA12wT5tLn4Q",
	authDomain: "piw-lab-ad18f.firebaseapp.com",
	projectId: "piw-lab-ad18f",
	storageBucket: "piw-lab-ad18f.appspot.com",
	messagingSenderId: "53927033922",
	appId: "1:53927033922:web:1316da4453f178e8cfc1db",
	measurementId: "G-EHSDZFWEE7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
