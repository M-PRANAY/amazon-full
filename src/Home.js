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
					<Product
						title="Valorant Points"
						image="https://images-eu.ssl-images-amazon.com/images/I/61Iljj9cOOL._AC_UL450_SR450,320_.jpg "
						price={20.99}
						rating={5}
					/>
					<Product
						title="Steam"
						image="https://images-eu.ssl-images-amazon.com/images/I/61NFS57VEKL._AC_UL450_SR450,320_.jpg"
						rating={3}
						price={20.99}
					/>
					<Product
						title="Sony Headset"
						image="https://images-eu.ssl-images-amazon.com/images/I/41zqAOpwu7L._AC_UL450_SR450,320_.jpg"
						rating={4}
						price={10.99}
					/>
				</div>

				<div className="home_row">
					<Product
						title="Asus Chromebook"
						image="https://images-eu.ssl-images-amazon.com/images/I/41XuMF92kzL._AC_UL450_SR450,320_.jpg"
						price={50.99}
						rating={4}
					/>
					<Product
						title="beat XP unbound NEO"
						image="https://images-eu.ssl-images-amazon.com/images/I/61xQOD1ZPUL._AC_UL450_SR450,320_.jpg"
						price={10.00}
						rating={2}
					/>
				</div>
				<div className="home_row">
					<Product
						title="boat immortal"
						image="https://m.media-amazon.com/images/I/41w2pkIRKxL._SX300_SY300_QL70_FMwebp_.jpg"
						price={5.00}
						rating={1}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
