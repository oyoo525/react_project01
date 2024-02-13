import React from "react";
import logo from '../../../logo.svg';
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../../../assets/css/bootstrap.min.css';
import '../../../assets/css/header.css';
import { searchSelect } from "../../../assets/js/header.js";

export default function Header() {
	return (
		<header>
			<Link to="" className="logo"><img className="logo" src={logo}/></Link>
			<div className="searchForm">
				<button className="searchIcon">
					<i className="bi bi-search-heart-fill"></i>
				</button>
				<input className="searchInput" type="text" placeholder="Search in Inspiration"/>
				<div className="searchText">
					<span>IN</span>
				</div>
				<div className="searchSelect" onClick={searchSelect}>
					<span>Inspiration</span>
					<span><i className="bi bi-caret-down-fill"></i></span>
					<div className="searchOption">
						<li className="optionTitle">
							<span>Inspiration</span>
							<span><i className="bi bi-caret-up-fill"></i></span>
						</li>
						<Link to="" className="linkText text-white"><li className="selectOption">Inspiration</li></Link>
						<Link to="" className="linkText text-white"><li className="selectOption optionContent">Websites</li></Link>
						<Link to="" className="linkText text-white"><li className="selectOption optionContent">Elements</li></Link>
						<Link to="" className="linkText text-white"><li className="selectOption optionContent">Collections</li></Link>
						<Link to="" className="linkText text-white"><li className="selectOption">Blog</li></Link>
						<Link to="" className="linkText text-white"><li className="selectOption">Courses</li></Link>
						<Link to="" className="linkText text-white"><li className="selectOption optionContent">Best Sellers</li></Link>
						<Link to="" className="linkText text-white"><li className="selectOption">Directory</li></Link>
					</div>
				</div>
			</div>
			<div className="member">
				<Link to="" className="linkText text-blue">Log in</Link>
				<Link to="" className="linkText text-blue">Sing up</Link>
			</div>
			<div className="member-icon">
				<i className="bi bi-person-circle"></i>
			</div>
			<div className="buttons">
				<button className="btn btn-blue">Be Pro</button>
				<button  className="btn btn-outline-blue">Submit Website</button>
			</div>
		</header>
	)
}