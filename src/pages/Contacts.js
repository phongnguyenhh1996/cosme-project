import React, { Component } from 'react';
import { HashRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import ScrollToTop from '../components/scrollOnTop';

class Contacts extends React.Component{
	render(){
		return(

			<div className="container-fluid contacts">
			<ScrollToTop />
				<div className="row px-sm-3 px-lg-5 py-sm-3">
					<nav aria-label="breadcrumb ">
					  <ol className="breadcrumb bg-white">
					    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">Contacts</li>
					  </ol>
					</nav>
					<div className="w-100 border-bottom-dashed mx-sm-3"></div>
				</div>

				<div className="row px-sm-3 px-lg-5 py-4">
					<div  className="col-sm-8 col-lg-9 pr-sm-5 ">
						<div className="contacts-info pb-sm-5">
							<h2>Contact info</h2>
							<p>We are always ready to help you. There are many ways to contact us.
							 You may drop us a line, give us a call or send an email, choose what suits you most.</p>
							<p>
								<strong>Address:</strong> 
								 The Company Name Inc. 9870 St Vincent Place, Glasgow, DC 45 Fr 45
							</p>
							<p>
								<strong>Telephone:</strong>
								<a href="#"> +1 800 603 6035</a>
							</p>
							<p>
								<strong>FAX:</strong>
								<a href="#"> +1 800 889 9898</a>
							</p>
							<p>
								<strong>E-mail: </strong>
								<a href="#">mail@demolink.org</a>
							</p>
						</div>
						<div className="w-100 border-bottom-dashed mx-sm-9"></div>
						<div className="contact-form pt-5">
							<h2> Contacts Form</h2>

							<div className="form-group">
							    <label>Your Name: <span>*</span></label>
							    <input type="text" className="form-control"/>
							</div>
							<div className="form-group">
							    <label for="formGroupExampleInput2">Your Email: <span>*</span></label>
							    <input type="text" className="form-control"/>
							</div>
							<div className="form-group">
							    <label >Your Message:  <span>*</span></label>
							     <textarea className="form-control"  rows="8"></textarea>
							</div>
							<div className="form-group">
								<button type="submit" className="btn btn-primary button1">SEND</button>
							</div>
							 
						</div>
					</div>

					<div className="col-sm-4 col-lg-3">
						<div className="row pr-sm-20 ">
							<div className="making-your col-sm-12">
								<h2 className="pt-4">Making your diet healthier since 1992…</h2>
								<p> Organica is an old player when it comes to everything health-inducing and organic-enhanced!
								 For years we've been selling quality organic food, vitamins, bio-additives,
								 nutritional supplements and other healthy products both in the U.S., as well as internationally.
								</p>
							</div>
							<div className="subscribe-follow px-3 px-sm-0">
								<div className="subscribe">
									<h2 className="pt-5">Subscribe</h2>
									<p>Trust us, you'll want to hear what we have to say</p>
									<div className="form-group">
									<input type="text" className="form-control" placeholder=" Enter Your Email"/>
									</div>
									<div className="form-group">
										<button type="submit" className="btn btn-primary btn-lm btn-block">SUBSCRIBE</button>
									</div>
								</div>
								<div className="follow pt-3">
	 								<h2 className="pt-5">Follow</h2>
									<p className="pt-3 ">
										Read our latest news on any of these social networks!
									</p>
									<div className=" pt-2 pb-5">
										<ul className="nav social1 mx-auto justify-content-center">
				                            <li className="nav-item">
				                                <a className="nav-link" href="#"><i className="fab fa-facebook-f"></i></a>
				                            </li>
				                            <li className="nav-item">
				                                <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
				                            </li>
				                            <li className="nav-item">
				                                <a className="nav-link" href="#"><i className="fab fa-google-plus-g"></i></a>
				                            </li>
				                            <li className="nav-item">
				                                <a className="nav-link" href="#"><i className="fab fa-linkedin-in"></i></a>
				                            </li>
				                            <li className="nav-item">
				                                <a className="nav-link" href="#"><i className="fab fa-pinterest"></i></a>                            </li>
			                        	</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		);
	}
}
export default Contacts;