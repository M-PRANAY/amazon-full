import React from "react";
import "./Product.css";
function Product({id,title,image,price,rating}) {

	const addToBasket =() =>{
		
	}

	return (
		<div className="product">
			<div className="product_info">
				<p>{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">
					{Array(rating).fill().map(() => (<p>⭐</p>))}
				</div>
			</div>
			<img
				src= {image}
				alt=""
			/>

            <button className="product_button" onClick={addToBasket}>Add to Basket</button>
		</div>
	);
}

export default Product;
