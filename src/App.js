import "./App.css";
import Checkout from "./Checkout";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<Router>
			<Header />
			<Routes>
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
