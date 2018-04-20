import React, { Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import ScrollToTop from '../components/scrollOnTop';

class Shop extends React.Component{
	render(){
		return(

	<div className="container-fluid page-shop">
	<ScrollToTop />
	<div className="row px-md-5 py-md-3">
					<nav aria-label="breadcrumb ">
					  <ol class="breadcrumb bg-white">
					    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li class="breadcrumb-item active" aria-current="page">Shop</li>
					  </ol>
					</nav>
					<div className="w-100 border-bottom-dashed mx-md-3"></div>
				</div>
			     <div className="row px-md-5 py-md-4">
	<div id="primary" className="col-md-9 col-xl-9">
<div className="row products shop">

		<div id="products" className="col-sm-6 col-md-4 col-lg-4 col-xl-4">
		<a href="#">
		<img className="img-fluid" src={require('../images/Amino Acids.jpg')} />	
		<h3 className="text-center py-md-3">
		Amino Acids 	</h3>
	</a>	</div>
	<div id="products"  className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 ">
		<a  href="#">
		<img className="img-fluid" src={require('../images/Antioxidants.jpg')} />
		<h3 className="text-center py-md-3">
		Antioxidants	</h3>
	</a>	</div>
	<div id="products"  className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
		<a   href="#">
		<img className="img-fluid" src={require('../images/Multivitamins.jpg')} />
		<h3 className="text-center py-md-3">
		Multivitamins	</h3>
	</a>	</div>
	<div  id="products" className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 product-category product">
		<a  href="#">
		<img className="img-fluid" src={require('../images/Organic Cosmetics.jpg')} />
		<h3 className="text-center py-md-3">
		Organic Cosmetics </h3>
	</a>	</div>
	<div id="products" className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 product-category product first">
		<a  href="#">
		<img className="img-fluid" src={require('../images/Organic Food.jpg')} />
		<h3 className="text-center py-md-3">
		Organic Food 	</h3>
	</a>	</div>
	<div id="products" className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 product-category product last">
		<a   href="#">
			<img className="img-fluid" src={require('../images/Vitamins & Minerals.jpg')} />
		<h3 className="text-center py-md-3">
		Vitamins &amp; Minerals 	</h3>
	</a>	
	</div>
	</div>
	</div>

<div className="col-md-3">
						<div className="row">
							<div className="col-md-12 browse aside">
								<h4 className="font-weight-bold w-100 pt-md-5">Browse</h4>
								<ul className="nav flex-column pt-md-4">
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Amino Acids <span>(19)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Antioxidants <span>(19)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Multivitamins <span>(19)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Organic Cosmetics <span>(19)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Organic Food <span>(19)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Vitamins & Minerals <span>(19)</span></a>
				                  </li>
				                </ul>
							</div>
							<div className="col-md-12 aside">
								<h4 className="font-weight-bold w-100 pt-md-5 mt-md-5">Top Rated Products</h4>
								<ul className="product-list pt-md-4">
									<li>
										<a href="#" title="Daily Detangling Shampoo">
									<div className="images1">
										<img  width="75" height="75" src={require('../images/Daily Detangling Shampoo.png')} /></div>
										<ul className="product-widget">
										<li className="nav-item2"><a href="#">Amino Acids</a></li>
									<li className="nav-item2"><a href="#">Antioxidants</a></li>
									<li className="nav-item2"><a href="#">Multivitamins</a></li>
									<div className="product_title_link"><a href="#" title="Daily Detangling Shampoo">
											<span className="product-title">Daily Detangling Shampoo</span>
										</a>
										</div>
										<span className="price color-main2 font-weight-bold">15.00$
										</span> – <span className="price color-main2 font-weight-bold">21.00$</span>
										<p>
									<span className="fa fa-star checked color-main2 fa-xs mr-1"></span>
									<span className="fa fa-star checked color-main2 fa-xs mr-1"></span>
									<span className="fa fa-star checked color-main2 fa-xs mr-1"></span>
									<span className="fa fa-star text-secondary fa-xs mr-1"></span>
									<span className="fa fa-star text-secondary fa-xs mr-1"></span></p>
									</ul>
									</a>
									</li>
									<li>
										<a href="#" title="Eminence Organic">
										<div className="images1">
										<img width="75" height="75" src={require('../images/Eminence Organic.png')} /></div>
										<ul className="product-widget">
										
										<li className="nav-item2"><a href="#">Amino Acids</a></li>
									<li className="nav-item2"><a href="#">Antioxidants</a></li>
										</ul>
										<div className="product_title_link"><a href="#" title="Eminence Organic">
											<span className="product-title">Eminence Organic</span>
										</a>
										</div>
										<span className="price color-main2 font-weight-bold">15.00$
										</span> – <span className="price color-main2 font-weight-bold">21.00$</span>
										<p>
									<span className="fa fa-star checked color-main2 fa-xs mr-1"></span>
									<span className="fa fa-star checked color-main2 fa-xs mr-1"></span>
									<span className="fa fa-star checked color-main2 fa-xs mr-1"></span>
									<span className="fa fa-star text-secondary fa-xs mr-1"></span>
									<span className="fa fa-star text-secondary fa-xs mr-1"></span></p>	</a>
										</li>


									<li>
										<a href="#" title="BEST Vitamin C">
										<div className="images1">
										<img width="75" height="75" src={require('../images/BEST Vitamin C.png')} />
										</div>
										<ul className="product-widget">
										<li className="nav-item2"><a href="#">Amino Acids</a></li>
									<li className="nav-item2"><a href="#">Antioxidants</a></li>
									<li className="nav-item2"><a href="#">Multivitamins</a></li>
										</ul>
										<div className="product_title_link"><a href="#" title="BEST Vitamin C">
											<span className="product-title">BEST Vitamin C</span>
										</a>
										</div>
										<span className="price color-main2 font-weight-bold">15.00$
										</span> – <span className="price color-main2 font-weight-bold">21.00$</span>
										<p>
									<span className="fa fa-star checked color-main2 fa-xs mr-1"></span>
									<span className="fa fa-star checked color-main2 fa-xs mr-1"></span>
									<span className="fa fa-star checked color-main2 fa-xs mr-1"></span>
									<span className="fa fa-star text-secondary fa-xs mr-1"></span>
									<span className="fa fa-star text-secondary fa-xs mr-1"></span></p>

										</a>
										
									</li>

									</ul>
							</div>
							<div className="col-md-12 aside">
								<h4 className="font-weight-bold w-100 pt-md-5 mt-md-3">Recent Reviews</h4>
								<ul className="product-list pt-md-4">
									<li className="pb-md-5">

									<div className="images3">
										<img  width="75" height="75" src={require('../images/Daily Detangling Shampoo.png')} /></div>
										<em class="reviewer">by <span className="by">admin</span></em>
									<div className="product_title_link"><a href="#" title="Daily Detangling Shampoo">
											<span className="product-title">Daily Detangling Shampoo</span></a></div>
										
									</li>
									<li className="pb-md-5">

									<div className="images3">
										<img  width="75" height="75" src={require('../images/Eminence Organic.png')} /></div>
										<em class="reviewer">by <span className="by">admin</span></em>
									<div className="product_title_link"><a href="#" title="Eminence Organic">
											<span className="product-title">Eminence Organic</span></a></div>
										
									</li>
									<li className="pb-md-5">

									<div className="images3">
										<img  width="75" height="75" src={require('../images/BEST Vitamin C.png')} /></div>
										<em class="reviewer">by <span className="by">admin</span></em>
									<div className="product_title_link"><a href="#" title="BEST Vitamin C">
											<span className="product-title">BEST Vitamin C</span></a></div>
										
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
export default Shop;