import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
export default function Header() {
	const [{ basket }] = useStateValue();

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
			
				<Link to="/login">
					<div className="header_option">
						<span className="header_optionlineOne">Hello Guest</span>{" "}
						<span className="header_optionlineTwo">Sign In</span>{" "}
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
