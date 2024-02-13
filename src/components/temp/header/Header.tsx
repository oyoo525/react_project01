import React from "react";
import logo from '../../../logo.svg';
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<header style={{
			width : "100%",
			padding : "0 52px 0 52px",
			height : "71px",
			backgroundColor : "lightgray",
			display : "flex",
			justifyContent : "space-between"
		}}>
			<img src={logo} style={{
				height : "100%",
			}}/>
			<input type="text" style={{
				width : "55vw",
				height : "80%",
				verticalAlign : "17px",
				border : "none",
				borderRadius : "12px",
				backgroundColor : "gray",
				

			}} />
			<Link to="">로그인</Link>
			<Link to="">가입하기</Link>
			<button>Be Pro</button>
			<button>Submit Website</button>
		</header>
	)
}