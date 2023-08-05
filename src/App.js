import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
function App() {
	const promise = loadStripe(
		"pk_test_51NTjU2SDwps4Zo3ijDzZzEwySSZViPBs3Ry74NXvKd0lMefHAjhaFDvoiIfYnBzI9DyM0Bc2NP5YvBhhAT1UqHpO00EaanACQT"
	);
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			console.log("The User Is >> ", authUser);
			if (authUser) {
				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<Header />
			<Routes>
				<Route
					path="/login"
					element={
						<>
							<Login />
						</>
					}
				/>

				<Route
					path="/"
					element={
						<>
							<Home />
						</>
					}
				/>

				<Route
					path="/checkout"
					element={
						<>
							{/* <Header /> */}
							<Checkout />
						</>
					}
				/>

				<Route
					path="/payment"
					element={
						<>
							<Header />
							<Elements stripe={promise}>
								<Payment />
							</Elements>
						</>
					}
				/>
			</Routes>
			;
		</Router>
	);
}

export default App;
