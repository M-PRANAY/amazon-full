import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
	return (
		<Router>
			<Routes>
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
							<h1>Checkout</h1>
						</>
					}
				/>
			</Routes>
			;
		</Router>
	);
}

export default App;
