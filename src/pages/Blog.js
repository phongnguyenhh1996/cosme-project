import React, { Component } from 'react';
import { HashRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import ScrollToTop from '../components/scrollOnTop';

class Blog extends React.Component{
	render(){

        return(
			<div className="container-fluid blog">
			<ScrollToTop />
				<div className="row px-sm-3 px-lg-5 py-sm-3">
					<nav aria-label="breadcrumb ">
					  <ol className="breadcrumb bg-white">
					    <li className="breadcrumb-item"> <Link to="/">Home</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">Blog</li>
					  </ol>
					</nav>
					<div className="w-100 border-bottom-dashed mx-sm-3">
					</div>
				</div>
				<div className="row px-sm-3 px-lg-5 py-4">
					<div className="col-sm-8 col-lg-9 pr-sm-5">
						{Array.apply(null, Array(5)).map((a,index)=> <div className="border-bottom mb-5">
							<div className="title pd-5">
							<h1>
								<a href="#"> What Are Superfoods?
								</a>
							</h1>
						</div>
						<div className="publish pb-sm-5 pb-3" >
							Published on 
							<a href="#" className="px-2">Oct 12, 2016</a>
							<span className="dot px-2"></span> by
							<a href="#" className="px-2">Admin</a>
							<span className="dot px-2"></span>
							<a href="#" className="px-1"> 1 comments</a>
						</div>
						<a href="#">
						<img className="img-fluid pt-3 pb-3" src={require('../images/Blog '+(index+1)+'.jpg')} />	
						</a>
						<p> Superfoods are foods — mostly plant-based but also some fish and dairy — thought to be nutritionally
						 dense and thus good for one’s health. Blueberries, salmon, 
						kale and acai are just a few examples of foods that have garnered the “superfood” label.
						 However, there are…
						 </p>
						<div className="publish" >
							Categories:
							<a href="#" className="px-2">Organic Brands,</a>
							<a href="#" className="px-2">Organic Skincare</a>
						</div>
						<div className="publish" >
						<span className="dot px-2"></span>
						 Tag:
							<a href="#" className="px-2">cometic, </a>
							<a href="#" classList="px-2">food, </a>
							<a href="#" className="px-2">health,</a>
							<a href="#" className="px-2">organic,</a>
							<a href="#" className="px-2">vitamins</a>
						 </div>
						<div className="row px-3 px-sm-0 py-sm-5 py-3  justify-content-between">
							<ul className="nav social1 ">
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
	                        <button type="submit" className="btn btn-primary button1 ">READ MORE</button>
	                    </div>	
						</div>)}
				</div>
				<div className="col-sm-4 col-lg-3">
					<div className="row">
						<div className="making-your col-sm-12">
							<h2 className="pt-4">Making your diet healthier since 1992…</h2>
							<p> Organica is an old player when it comes to everything health-inducing and organic-enhanced!
							 For years we've been selling quality organic food, vitamins, bio-additives,
							 nutritional supplements and other healthy products both in the U.S., as well as internationally.</p>
						</div>
						<div className="making-your col-sm-12">
							<h2 className="pt-4">Search</h2>
							<div class="input-group input-group-sm pb-5 pt-3">
							    <input type="text" class="form-control" placeholder="Search"/>
							    <div class="input-group-btn">
							       <button class="btn btn-primary button1" type="submit">Search</button>
							    </div>
							</div>
						</div>
							<div className="subscribe-follow px-3 px-sm-0">
								<div className="subscribe px-sm-2">
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
						    <div className="making-your col-sm-12 pt-5">
								<h2 className="pt-4">Recent Posts</h2>
								<div className="recent-posts px-2 pt-3">
										Posted by 
										<a href="#" className="px-2">Admin</a>
									<h5>
										<a href="#">What Are Superfoods? </a>
									</h5>
									Oct 12, 2016
								</div>
								<div className="recent-posts px-2 pt-3">
										Posted by 
										<a href="#" className="px-2">Admin</a>
									<h5>
										<a href="#">Supplement Facts
										</a>
									</h5>
									Oct 11, 2016
								</div>
								<div className="recent-posts px-2 pt-3">
										Posted by 
										<a href="#" className="px-2">Admin</a>
									<h5>
										<a href="#">Audio Format
										</a>
									</h5>
									Sep 27, 2016
								</div>
								<div className="recent-posts px-2 pt-3">
										Posted by 
										<a href="#" className="px-2">Admin</a>
									<h5>
										<a href="#">Video Format
										</a>
									</h5>
									Sep 27, 2016
								</div>
							</div>
					
							<div className="col-sm-12 browse aside pt-5 ">
								<h4 className="font-weight-bold w-100 pt-5 pb-2">Product Categories</h4>
								<ul className="nav flex-column pt-4">
				                  <li className="nav-item">
				                    <a className="nav-link px-0" href="#">Amino Acids </a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-0" href="#">Antioxidants </a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-0" href="#">Multivitamins</a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-0" href="#">Organic Cosmetics</a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-0" href="#">Organic Food </a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-0" href="#">Vitamins & Minerals</a>
				                  </li>
				                </ul>
							</div>
						</div>
					</div>
				</div>
			
			</div>
		);
	}
}
export default Blog;