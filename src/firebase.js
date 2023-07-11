import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
import "firebase/compat/firestore";


const firebaseConfig = {
	apiKey: "AIzaSyAdLw2MKC9u1IQjcYA7eQBSvg5X4x0YVNw",
	authDomain: "clone-f2f65.firebaseapp.com",
	projectId: "clone-f2f65",
	storageBucket: "clone-f2f65.appspot.com",
	messagingSenderId: "1056400752041",
	appId: "1:1056400752041:web:0bc26f3ff21b69b62b18b8",
	measurementId: "G-3RR5RWLRG4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
