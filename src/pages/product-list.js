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
				<div className="row px-sm-3 px-lg-5 py-sm-3">
					<nav aria-label="breadcrumb ">
					  <ol className="breadcrumb bg-white">
					    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">Products List</li>
					  </ol>
					</nav>
					<div className="w-100 border-bottom-dashed mx-sm-3"></div>
				</div>
				<div className="row px-sm-3 px-lg-5 py-sm-4">
					<div className="col-sm-8 col-lg-9">
						<div className="row">
							<div className="col-5 col-sm-3 pt-5 pt-sm-0">
								<div className="shorting">Default sorting <i className="fas fa-chevron-down fa-xs"></i></div>
							</div>
							<p className="font-weight-bold color-main shorting-text pt-4 pt-sm-0">Showing all {prds.length} results</p>
						</div>
						<div className="row py-sm-4">
							{prds.map((prd) =>
							{
								return	<div className="products col-sm-6 col-lg-4 px-3 text-center my-4" key={prd.id}>
								      	  	<RateStar star={prd.star}/>
								      	  	<div className={`product-image product-${prd.status}`}>
									      	<Link to={"/shop/product_list/"+prd.name}><img className="img-fluid mx-auto" src={require('../images/'+prd.img + '.png')}/></Link>
									      	</div>
									      	<p className="text-secondary font-italic mt-3">{prd.tags.map((tag) => tag + ", ")}</p>
									      	<p className="font-weight-bold">{prd.name}</p>
									      	<p className="color-main2 font-weight-bold">{prd.price.toFixed(2)}$<span className={`text-secondary ml-2 ${(prd.status!="sale")?"d-none":""}`}>{(prd.status=="sale")?prd.oldprice.toFixed(2):""}$</span></p>
									      	<AddToCart item={prd} qty={1}/>
							      		</div>}
							)}
						</div>
					</div>
					<div className="col-sm-4 col-lg-3">
						<div className="row">
							<div className="col-sm-12 browse aside">
								<h4 className="font-weight-bold w-100 pt-5">Browse</h4>
								<ul className="nav flex-column pt-4">
				                  <li className="nav-item">
				                    <a className="nav-link px-sm-0" href="#">Amino Acids <span>(19)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-sm-0" href="#">Antioxidants <span>(9)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-sm-0" href="#">Multivitamins <span>(12)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-sm-0" href="#">Organic Cosmetics <span>(6)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-sm-0" href="#">Organic Food <span>(15)</span></a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-sm-0" href="#">Vitamins & Minerals <span>(19)</span></a>
				                  </li>
				                </ul>
				                <div className="filter-price px-4 mt-5 pb-5">
				                	<h4 className="font-weight-bold pt-5">Filter by price</h4>
				                	<div className="filter my-5"><div></div></div>
				                	<button className="btn">FILTER</button><span className="text-secondary float-right pt-2">Price: 15$ — 87$</span>
				                </div>
							</div>
							<div className="col-sm-12 aside">
								<h4 className="font-weight-bold w-100 pt-5 mt-5">Top Rated Products</h4>
								<ul className="product-list pt-4">
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
							<div className="col-sm-12 aside">
								<h4 className="font-weight-bold w-100 pt-5 mt-3">Recent Reviews</h4>
								<ul className="product-list pt-4">
									<li className="pb-5">

									<div className="images3">
										<img  width="75" height="75" src={require('../images/Daily Detangling Shampoo.png')} /></div>
										<em className="reviewer">by <span className="by">admin</span></em>
									<div className="product_title_link"><a href="#" title="Daily Detangling Shampoo">
											<span className="product-title">Daily Detangling Shampoo</span></a></div>
										
									</li>
									<li className="pb-5">

									<div className="images3">
										<img  width="75" height="75" src={require('../images/Eminence Organic.png')} /></div>
										<em className="reviewer">by <span className="by">admin</span></em>
									<div className="product_title_link"><a href="#" title="Eminence Organic">
											<span className="product-title">Eminence Organic</span></a></div>
										
									</li>
									<li className="pb-5">

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