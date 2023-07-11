import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";

function App() {
	useEffect(() => {
		auth.onAuthStateChanged
	},[]);

	return (
		<Router>
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
							<Header />
							<Home />
						</>
					}
				/>

				<Route
					path="/checkout"
					element={
						<>
							<Header />
							<Checkout />
						</>
					}
				/>
			</Routes>
			;
		</Router>
	);
}

export default App;
