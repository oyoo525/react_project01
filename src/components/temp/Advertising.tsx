import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function Advertising() {
	return(
		<div
			style={{
				width : "100%",
				height : "50px",
				backgroundColor : "black"
			}}>
			<Link to="" style={{
				textDecoration : "none"
			}}>
				<div>
					<span style={{
					fontSize : "17px",
					fontWeight : "bold",
					color : "white",
					lineHeight : "50px"
					}}><i className="bi bi-lightning-fill"></i>광고를 입력하세요.</span>
				</div>
			</Link>
		</div>
	)
}