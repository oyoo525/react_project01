import React from "react";
import img01 from '../assets/img/다운로드.png';
import { Link } from "react-router-dom";
import Marquee from 'react-marquee-slider';

export default function Home() {
	return (
		<div style={{
			width : "100vw",
			justifyContent : "center",
			textAlign : "center",
			padding : "5vw",
			backgroundColor : "#DDEAF3"
		}}>
			<div>
				<span style={{
					fontSize : "11vw",
					fontWeight : "bold",
					textAlign : "center"
				}}>SITE OF THE DAY</span>
			</div>
			<div>
				<span style={{
					fontSize : "2.5vw",
					color : "gray"
				}}>- Site of the Day - 7.95 - Feb 6, 2024 - Active Theory V6</span>
			</div>
			<div className="user_wrap" style={{
				position : "relative",
				width : "90vw",
				height : "50vw",
				overflow : "hidden",
				borderRadius : "15px",
				margin : "auto",
				marginTop : "4vw",
				marginBottom : "9vw",
			}}>
				<div className="user_img">
					<Link to="">
						<img src={img01} style={{
							width : "100%"
						}}/>
					</Link>
				</div>
				<div className="user_carousel" style={{
					position : "absolute",
					zIndex : 8,
					top : 0,
					bottom : 0,
					width : "100%",
					display : "flex",
					justifyContent : "center",
					alignItems : "center"
				}}>

				</div>
				<div className="user_btn" style={{
					position : "absolute",
					zIndex : 10,
					top : 0,
					bottom : 0,
					width : "100%",
					display : "flex",
					justifyContent : "center",
					alignItems : "center"
				}}>
					<div className="btn-border" style={{
						border : "3px solid gray",
						borderRadius : "10px",
						width : "20%",
						height : "10%",
						display : "flex",
						justifyContent : "center",
						alignItems : "center"
					}}>
						<span style={{
							fontSize : "2vw",
							fontWeight : "bold",
							color : "gray",
						}}>Explore SOTD</span>
					</div>
				</div>
			</div>
			<div>
				<Link to="" style={{
				display : "flex",
				justifyContent : "center",
				textDecoration : "none",
				color : "black"
				}}>
					<i className="bi bi-arrow-up-right-square-fill" style={{
						fontSize : "24px"
					}}></i>
					<div>
						<strong style={{
							textDecorationLine : "underline",
							color : "pink",
							
						}}><span style={{
							color : "black",
							fontSize : "24px",
							margin : "0 4px"
						}}>Active Theory</span></strong>
					</div>
					<div>
						<span >pro</span>
					</div>
				</Link>
			</div>
		</div>
	)
}