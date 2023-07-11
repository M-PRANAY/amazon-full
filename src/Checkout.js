import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
	const [{ basket }, dispatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout_left">
				<img
					className="checkout_ad"
					src="https://m.media-amazon.com/images/I/61e6xH7Z0-L._SX3000_.jpg"
					alt=""
				/>

				<div>
					<h2 className="checkout_title">Your Shopping Basket </h2>
					{basket.map((item) => (
						<CheckoutProduct
							id={item.id}
							title={item.title}
							price={item.price}
							rating={item.rating}
							image={item.image}
						/>
					))}

					{/* BasketItem */}
				</div>
			</div>

			<div className="checkout_right">
				<Subtotal />
			</div>
		</div>
	);
}

export default Checkout;
