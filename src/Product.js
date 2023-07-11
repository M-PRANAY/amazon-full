import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, rating }) {
	const [{basket}, dispatch] = useStateValue();
	
	const addToBasket = () => {
		console.log(basket)
		dispatch({
			type: "ADD_TO_BASKET",
			item: {
				id: id,
				title: title,
				price: price,
				rating: rating,
				image: image,
			},
		});
	};

	return (
		<div className="product">
			<div className="product_info">
				<p>{title}</p>
				<p className="product_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="product_rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>⭐</p>
						))}
				</div>
			</div>
			<img src={image} alt="" />

			<button className="product_button" onClick={addToBasket}>
				Add to Basket
			</button>
		</div>
	);
}

export default Product;
