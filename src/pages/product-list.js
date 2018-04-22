import React, { Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import prdStore from '../stores/productsStore';
import ProductsList from '../components/productsList';
import ScrollToTop from '../components/scrollOnTop';
import RateStar from '../components/rateStar';
import * as CartActions from '../actions/CartActions';
import AddToCart from '../components/addToCart';

class ProductList extends React.Component{
	render(){
		const prds=prdStore.getAll();
		return(
			<div className="container-fluid">
			<ScrollToTop />
				<div className="row px-md-5 py-md-3">
					<nav aria-label="breadcrumb ">
					  <ol className="breadcrumb bg-white">
					    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">Products List</li>
					  </ol>
					</nav>
					<div className="w-100 border-bottom-dashed mx-md-3"></div>
				</div>
				<div className="row px-md-5 py-md-4">
					<div className="col-md-9">
						<div className="row">
							<p className="font-weight-bold color-main shorting-text">Showing all {prds.length} results</p>
							<div className="col-md-3">
								<div className="shorting">Default sorting <i className="fas fa-chevron-down fa-xs"></i></div>
							</div>
						</div>
						<div className="row py-md-4">
							{prds.map((prd) =>
							{
								return	<div className="products px-md-3 text-center" key={prd.id}>
								      	  	<RateStar star={prd.star}/>
								      	  	<div className="product-image">
									      	<Link to={"/shop/product_list/"+prd.name}><img className="img-fluid mx-auto" src={require('../images/'+prd.img + '.png')}/></Link>
									      	</div>
									      	<p className="text-secondary font-italic mt-md-3">{prd.tags.map((tag) => tag + ", ")}</p>
									      	<p className="font-weight-bold">{prd.name}</p>
									      	<p className="color-main2 font-weight-bold">{prd.price.toFixed(2)}$</p>
									      	<AddToCart item={prd}/>
							      		</div>}
							)}
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
				                    <a className="nav-link px-md-0" href="#">Antioxidants <span>(9)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Multivitamins <span>(12)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Organic Cosmetics <span>(6)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Organic Food <span>(15)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Vitamins & Minerals <span>(19)</span></a>
				                  </li>
				                </ul>
				                <div className="filter-price px-md-4 mt-md-5 pb-md-5">
				                	<h4 className="font-weight-bold pt-md-5">Filter by price</h4>
				                	<div className="filter my-md-5"><div></div></div>
				                	<button className="btn">FILTER</button><span className="text-secondary float-right pt-md-2">Price: 15$ — 87$</span>
				                </div>
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
										<div className="images2">
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
										<em className="reviewer">by <span className="by">admin</span></em>
									<div className="product_title_link"><a href="#" title="Daily Detangling Shampoo">
											<span className="product-title">Daily Detangling Shampoo</span></a></div>
										
									</li>
									<li className="pb-md-5">

									<div className="images3">
										<img  width="75" height="75" src={require('../images/Eminence Organic.png')} /></div>
										<em className="reviewer">by <span className="by">admin</span></em>
									<div className="product_title_link"><a href="#" title="Eminence Organic">
											<span className="product-title">Eminence Organic</span></a></div>
										
									</li>
									<li className="pb-md-5">

									<div className="images3">
										<img  width="75" height="75" src={require('../images/BEST Vitamin C.png')} /></div>
										<em className="reviewer">by <span className="by">admin</span></em>
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
export default ProductList;