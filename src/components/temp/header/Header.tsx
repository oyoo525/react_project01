import React from "react";
import logo from '../../../logo.svg';
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../../assets/css/bootstrap.min.css';
import '../../../assets/css/header.css'

export default function Header() {
	return (
		<header>
			<img className="logo" src={logo}/>
			<div className="searchForm">
				<button className="searchIcon">
					<i className="bi bi-search-heart-fill"></i>
				</button>
				<input className="searchInput" type="text" placeholder="Search in Inspiration"/>
				<div className="searchText">
					<span>IN</span>
				</div>
				<div className="searchSelect">
					<span>Inspiration</span>
				</div>
			</div>
			<Link to="" className="linkText">Log in</Link>
			<Link to="" className="linkText">Sing up</Link>
			<button className="btn btn-blue">Be Pro</button>
			<button  className="btn btn-outline-blue">Submit Website</button>
		</header>
	)
}