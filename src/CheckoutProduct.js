import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
function CheckoutProduct({ id, image, title, price, rating }) {
	const [{ basket, user }, dispatch] = useStateValue();

	const removeFromBasket = () => {
		dispatch({
			type: "REMOVE_FROM_BASKET",
			id: id,
		});
	};

	return (
		<div className="checkoutproduct">
			<img className="chechoutproduct_image" src={image} alt="" />

			<div className="checkoutproduct_info">
				<p className="checkoutproduct_title">{title}</p>
				<p className="checkoutproduct_price">
					<small>$</small>
					<strong>{price}</strong>
				</p>
				<div className="checkoutproduct_rating">
					{Array(rating)
						.fill()
						.map(() => (
							<p>⭐</p>
						))}
				</div>
				<button onClick={removeFromBasket}>Remove from Basket</button>
			</div>
		</div>
	);
}

export default CheckoutProduct;
