import React from "react";
import "./Product.css";
function Product() {
	return (
		<div className="product">
			<div className="product_info">
				<p>12345</p>
				<p className="product_price">
					<small>$</small>
					<strong>1999</strong>
				</p>
				<div className="product_rating">
					<p>⭐</p>
					<p>⭐</p>
					<p>⭐</p>
				</div>
			</div>
			<img
				src="https://m.media-amazon.com/images/I/41Pn3umtB8L._SR215,215_.jpg"
				alt=""
			/>

            <button className="product_button">Add to Basket</button>
		</div>
	);
}

export default Product;
