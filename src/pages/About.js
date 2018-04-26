import React, { Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import ScrollToTop from '../components/scrollOnTop';

class About extends React.Component{
	render(){
		 return(
			<div className="container-fluid blog">
			<ScrollToTop />
				<div className="row px-sm-3 px-lg-5 py-sm-3">
					<nav aria-label="breadcrumb ">
					  <ol class="breadcrumb bg-white">
					    <li class="breadcrumb-item"> <Link to="/">Home</Link></li>
					    <li class="breadcrumb-item active" aria-current="page">About</li>
					  </ol>
					</nav>
					<div className="w-100 border-bottom-dashed mx-sm-3"></div>
				</div>
				<div className="row px-sm-3 px-lg-5 py-4">
					<div className="col-sm-8 col-lg-9 pr-sm-5">
						<div className="content pd-5">
							<h3>
								Making your diet healthier since 1992…
							</h3>
							<img className="img-fluid py-3" src={require('../images/About making.jpg')} />	
							<h2>
								Organica is an old player when it comes to everything health-inducing and organic-enhanced!
							</h2>
							<p className="py-3">
								For years we’ve been selling quality organic food, vitamins, bio-additives,
								 nutritional supplements and other healthy products both in the U.S.,
								  as well as internationally. A constantly expanding business, 
								  Organica offers one of the largest ranges of high-quality nutritional,
								 organic & health-improving products in the world.
							</p>
							<p className="py-3">
								Since 1992n we’ve been constantly evolving – both in the range 
								of nutrition that we have in stock and in the way that we sell it.
								Since the end of the 90s, our online retail store became a critical part of our business.
								This is one of the reasons why we’re able to offer you such an affordable pricing on it.
							</p>
							<p>
								We believe that it’s our store that offers the best overall value for healthy products anywhere.
							</p>
							<p>
								With over 35000 deeply discounted brand name products in stock, 
								shopping at Organica online is just like being in your own California-based natural products store!
							</p>
							<p>
								But without any doubt, it was the quality and the word-of-mouth advertisement,
								 that has guaranteed us the strong position that we have on the market today…
							</p>
						
						</div>
						
					</div>
					<div className="col-sm-4 col-lg-3">
						<div className="row">
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
									<div class="form-group">
										<input type="text" class="form-control" placeholder=" Enter Your Email"/>
									</div>
									<div class="form-group">
										<button type="submit" class="btn btn-primary btn-lm btn-block">SUBSCRIBE</button>
									</div>
								</div>
								<div className="follow pt-3">
 									<h2 className="pt-5">Follow</h2>
									<p className="pt-3 ">
										Read our latest news on any of these social networks!
									</p>
									<div className="pt-2 pb-5">
										<ul className="nav social1 mx-auto justify-content-sm-center">
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
				                                <a className="nav-link" href="#"><i className="fab fa-pinterest"></i></a>
				                            </li>
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
export default About;