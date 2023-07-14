import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import { getBasketTotal } from "./reducer";
function Payment() {
	const handleSubmit = async (e) => {
		e.preventDefault();
		setProcessing(true);
		const payload = await stripe
	};

	const handleChange = (e) => {
		setDisabled(e.empty);
		setError(e.error ? e.error.message : "");
	};
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [{ basket, user }, dispatch] = useStateValue();
	const stripe = useStripe();
	const elements = useElements();
	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	return (
		<div className="payment">
			<div className="payment_container">
				<h1>
					Checkout (<Link to="/checkout">{basket?.length} items</Link>)
				</h1>
				<div className="payment_section">
					<div className="payment_title">
						<h3>Delivery Address</h3>
					</div>
					<div className="payment_address">
						<p>{user?.email}</p>
						<p>123</p>
						<p>America</p>
					</div>
				</div>

				<div className="payment_section">
					<div className="payment_title">
						<h3>Review Items and Delivery</h3>
					</div>
					<div className="payment_items">
						{basket.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								price={item.price}
								image={item.image}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

				<div className="payment_section">
					<div className="payment_title">
						<h3>Payment Method</h3>
					</div>
					<div className="payment_details">
						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className="payment_priceContainer">
								renderText ={" "}
								{(value) => (
									<>
										<h3>Order Total :{value}</h3>
									</>
								)}
								decimalScale ={2}
								value = {getBasketTotal(basket)}
								displayType={"text"}
								thousandSeperator ={true}
								prefix={"$"}
								<button disabled={processing || disabled || succeeded}>
									<span>
										{processing ? <p>Processing</p> : <p>{"Buy Now"}</p>}
									</span>
								</button>
							</div>

							{error && <div>{error}</div>}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Payment;
