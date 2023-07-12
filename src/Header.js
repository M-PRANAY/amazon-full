import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
export default function Header() {
	const [{ basket, user }] = useStateValue();

	const handleAuthentication = () => {
		if (user) {
			auth.signOut();
		}
	};
	return (
		<div className="header">
			<img
				className="header_logo"
				src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
				alt=""
			/>

			<div className="header_search">
				<input className="header_searchInput" type="text" />
				<SearchIcon className="header_searchIcon" />
			</div>

			<div className="header_nav">
				<Link to={!user && "/login"}>
					<div className="header_option" onClick={handleAuthentication}>
						<span className="header_optionlineOne">Hello Guest</span>{" "}
						<span className="header_optionlineTwo">
							{user ? "Sign Out" : "Sign In"}
						</span>{" "}
					</div>
				</Link>

				<div className="header_option">
					<span className="header_optionlineOne">Returns</span>{" "}
					<span className="header_optionlineTwo">and Orders</span>{" "}
				</div>
				<div className="header_option">
					<span className="header_optionlineOne">Your</span>{" "}
					<span className="header_optionlineTwo">Prime</span>{" "}
				</div>
				<div className="header_optionBasket">
					<Link to="/checkout">
						<ShoppingBasketIcon />
					</Link>
					<span className="header_optionlineTwo header_basketCount">
						{basket?.length}
					</span>
				</div>
			</div>
		</div>
	);
}
