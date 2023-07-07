import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
	return (
		<div className="home">
			<div className="home_container">
				<img
					className="home_image"
					src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Softlines_JWL_SH_GW_Assets/July_23/MFD/Unrec/Shoes/3000_shoes._CB601250574_.jpg"
					alt=""
				/>
				<div className="home_row">

				<Product />
				<Product />
                </div>

			</div>
		</div>
	);
}

export default Home;
