import React from "react";
import img01 from '../assets/img/bg01.png';
import { Link } from "react-router-dom";
import '../assets/css/home.css';

export default function Home() {
	return (
		<div className="whole">
			<div>
				<span className="title">SITE OF THE DAY</span>
			</div>
			<div>
				<span className="sub-title">- Site of the Day - 7.95 - Feb 6, 2024 - Active Theory V6</span>
			</div>
			<div className="user-wrap">
				<div className="user-img">
					<img src={img01} className="back-img"/>
				</div>
				<div className="user-carousel">
				</div>
				<Link to="">
					<div className="user-btn">
						<div className="btn-border">
							<span className="btn-name">Explore SOTD</span>
						</div>
					</div>
				</Link>
			</div>
			<div>
				<Link to="" className="under-title">
					<i className="bi bi-arrow-up-right-square-fill"></i>
					<div>
						<strong className="underline"><span className="under-title-text">Active Theory</span></strong>
					</div>
					<div>
						<span >pro</span>
					</div>
				</Link>
			</div>
		</div>
	)
}