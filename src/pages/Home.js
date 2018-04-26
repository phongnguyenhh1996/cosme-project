import React, { Component } from 'react';
import ProductsList from '../components/productsList';
import prdStore from '../stores/productsStore';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import Slider from "react-slick";
import RateStar from '../components/rateStar';
import AddToCart from '../components/addToCart';

class Home extends React.Component{
	render(){
		const prds=prdStore.getAll();
		var settings = {
		  arrows: false,
	      responsive: [
	      	{
	          breakpoint: 960,
	          settings: {
	            slidesToShow: 4,
	            slidesToScroll: 4
	          }
	        },
	        {
	          breakpoint: 768,
	          settings: {
	            slidesToShow: 2,
	            slidesToScroll: 2
	          }
	        },
	        {
	          breakpoint: 576,
	          settings: {
	            slidesToShow: 1,
	            slidesToScroll: 1
	          }
	        }
	      ]
	    };
		return(
			<div className="container-fluid">
				<div className="row slide-main">
					<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
					  <div className="carousel-inner">
					  {Array.apply(null, Array(3)).map((a,index)=> 
					  	<div className={`carousel-item ${(index==0)?"active":""}`}>
					      <img className="d-block w-100" src={require('../images/slide-'+(index+1)+'.jpg')} alt="First slide" />
					      <div className="carousel-caption pt-sm-4 pt-lg-5 mt-lg-5">
						    <h1 className="hand-writing color-main2 pt-sm-5">Find the</h1>
						    <h1 className="sans-serif-font text-dark font-weight-bold"><span className="font-bigger sans-serif-font">Healthiest</span><br/>Organic Cosmetic Products</h1>
						    <button className="btn btn-outline-dark font-weight-bold mt-sm-3 mt-sm-4">SHOP NOW</button>
						  </div>
					    </div>
					  )}
					  </div>
					  <a className="carousel-control-prev d-none d-sm-flex" href="#carouselExampleIndicators" role="button" data-slide="prev">
					    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span className="sr-only">Previous</span>
					  </a>
					  <a className="carousel-control-next d-none d-sm-flex" href="#carouselExampleIndicators" role="button" data-slide="next">
					    <span className="carousel-control-next-icon" aria-hidden="true"></span>
					    <span className="sr-only">Next</span>
					  </a>
					</div>
				</div>
				<div className="row px-sm-3 px-lg-5 py-sm-5 banner">
					<div className="col-sm-4"><a href="#"><img className="img-fluid" src={require('../images/banner-1.png')}/></a></div>
					<div className="col-sm-4">
						<div className="row justify-content-sm-between">
							<div className="col-sm-12 mb-sm-1 h-50"><a href="#"><img className="img-fluid" src={require('../images/banner-2.png')}/></a></div>
							<div className="col-sm-12 mt-sm-4 h-50"><a href="#"><img className="img-fluid" src={require('../images/banner-3.png')}/></a></div>
						</div>
					</div>
					<div className="col-sm-4"><a href="#"><img className="img-fluid" src={require('../images/banner-4.jpg')}/></a></div>
				</div>
				<div className="row px-sm-3 px-lg-5 pb-5">
					<h3 className="text-center title w-100 py-5"><span className="font-weight-bold">FEATURED</span> PRODUCTS</h3>
						<div className="w-100">
							<Slider
					          infinite={false}
					          slidesToShow={4}
					          slidesToScroll={1}
					          swipeToSlide={true}
					          {...settings}
					        >
					        {prds.map((prd) =>
							{	if(prd.status=="featured"){
								return	<div className="products px-3 text-center" key={prd.id}>
								      	  	<RateStar star={prd.star}/>
								      	  	<div className="product-image product-featured">
									      	<Link to={"/shop/product_list/"+prd.name}><img className="img-fluid mx-auto" src={require('../images/'+prd.img + '.png')}/></Link>
									      	</div>
									      	<p className="text-secondary font-italic mt-sm-3">{prd.tags.map((tag) => tag + ", ")}</p>
									      	<p className="font-weight-bold">{prd.name}</p>
									      	<p className="color-main2 font-weight-bold">{prd.price.toFixed(2)}$</p>
									      	<AddToCart item={prd} qty={1}/>
							      		</div>}
							}
							)}
					        </Slider>
						</div>
				</div>
				<div className="row px-sm-3 px-lg-5 news-events pb-5">
					<h3 className="text-center title w-100 py-5"><span className="font-weight-bold">ORGANICA</span> NEWS & EVENTS</h3>
					<div className="col-sm-6 mb-3 mb-sm-0">
						<img className="img-fluid" src={require('../images/new-event.jpg')}/>
						<Link to="/blog"><h3 className="pl-sm-5 pb-sm-4">What Are Superfoods?</h3></Link>
					</div>
					<div className="col-sm-6">
						<img className="img-fluid" src={require('../images/new-event-2.jpg')}/>
						<Link to="/blog"><h3 className="pl-sm-5 pb-sm-4">Supplement Facts</h3></Link>
					</div>
				</div>
				<div className="row px-sm-3 px-lg-5 pb-5">
					<h3 className="text-center title w-100 py-5"><span className="font-weight-bold">PRODUCTS</span> FOR SALE</h3>
					<div className="w-100">
							<Slider
					          infinite={false}
					          slidesToShow={4}
					          slidesToScroll={2}
					          swipeToSlide={true}
					          {...settings}
					        >
					        {prds.map((prd) =>
							{	if (prd.status=="sale"){
								return	<div className="products px-3 text-center" key={prd.id}>
								      	  	<RateStar star={prd.star}/>
								      	  	<div className="product-image product-sale">
									      	<Link to={"/shop/product_list/"+prd.name}><img className="img-fluid mx-auto" src={require('../images/'+prd.img + '.png')}/></Link>
									      	</div>
									      	<p className="text-secondary font-italic mt-sm-3">{prd.tags.map((tag) => tag + ", ")}</p>
									      	<p className="font-weight-bold">{prd.name}</p>
									      	<p className="color-main2 font-weight-bold">{prd.price.toFixed(2)}$<span className="text-secondary ml-2">{prd.oldprice.toFixed(2)}$</span></p>
									      	<AddToCart item={prd} qty={1}/>
							      		</div>}
							}
							)}
					        </Slider>
						</div>
				</div>
				<div className="row px-sm-3 px-lg-5 pb-5">
					<h3 className="text-center title w-100 py-5 review">CUSTOMER REVIEWS</h3>
					<div id="carouselExampleIndicators4" className="carousel slide w-100" data-ride="carousel">
						<ol className="carousel-indicators">
						    <li data-target="#carouselExampleIndicators4" data-slide-to="0" className="active"></li>
						    <li data-target="#carouselExampleIndicators4" data-slide-to="1"></li>
						    <li data-target="#carouselExampleIndicators4" data-slide-to="2"></li>
						 </ol>
					  <div className="carousel-inner">
					    <div className="carousel-item active">
					      <div className="row text-center">
					      	  <img className="rounded-circle mx-auto" src={require('../images/customer-1.jpg')} />
					      	  <div className="review-text pt-sm-3 pb-sm-5">
							    <p className="px-5"><i className="fas fa-quote-left fa-3x color-main2"></i><br /><br />I was looking for a coffee machine that is not too pricy for my limited budget, but at the same
					      	   time not too cheap. Because everyone knows, that no good quality and durability are attached
					      	    to a low price tag. Here I've found hundreds of choices, so I was easily able...</p>
					      	   <p className="color-main2 text-center">- Mary Willis</p>
							  </div>
					      </div>
					    </div>
					    <div className="carousel-item">
					      <div className="row text-center">
					      	  <img className="rounded-circle mx-auto" src={require('../images/customer-2.jpg')} />
					      	  <div className="review-text pt-sm-3 pb-sm-5">
							    <p className="px-5"><i className="fas fa-quote-left fa-3x color-main2"></i><br /><br />I was looking for a coffee machine that is not too pricy for my limited budget, but at the same
					      	   time not too cheap. Because everyone knows, that no good quality and durability are attached
					      	    to a low price tag. Here I've found hundreds of choices, so I was easily able...</p>
					      	   <p className="color-main2 text-center">- Mary Willis</p>
							  </div>
					      </div>
					    </div>
					    <div className="carousel-item">
					      <div className="row text-center">
					      	  <img className="rounded-circle mx-auto" src={require('../images/customer-3.jpg')} />
					      	  <div className="review-text pt-sm-3 pb-sm-5">
							    <p className="px-5"><i className="fas fa-quote-left fa-3x color-main2"></i><br /><br />I was looking for a coffee machine that is not too pricy for my limited budget, but at the same
					      	   time not too cheap. Because everyone knows, that no good quality and durability are attached
					      	    to a low price tag. Here I've found hundreds of choices, so I was easily able...</p>
					      	   <p className="color-main2 text-center">- Mary Willis</p>
							  </div>
					      </div>
					    </div>
					  </div>
					</div>
				</div>
				<div className="row px-sm-3 px-lg-5 sub-follow pb-5">
					<h2 className="text-center w-100 pt-5 pb-4"><span className="font-weight-bold">Signup</span> For Exclusive Deals,<br/><small><small>Info and More</small></small></h2>
					<form className="col-sm-7 mx-auto">
					  <div className="form-row justify-content-sm-center">
					    <div className="col-sm-7 pb-2 pb-sm-0">
					      <label className="sr-only" for="inlineFormInputName">Name</label>
					      <input type="text" className="form-control py-sm-2" id="inlineFormInputName" placeholder="Enter your e-mail address"/>
					    </div>
					    <div className="col-sm-auto col-12">
					      <button type="submit" className="btn py-sm-2 w-100">SUBSCRIBE</button>
					    </div>
					  </div>
					</form>	
					<h2 className="text-center w-100 pt-5 pb-4"><span className="font-weight-bold">Special</span> Discounts<br/><small><small>on Our Social Media</small></small></h2>	
					<ul className="nav col-sm-8 mx-auto justify-content-center">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fab fa-facebook-f fa-lg fa-fw"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fab fa-twitter fa-lg fa-fw"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fab fa-google-plus-g fa-lg fa-fw"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fab fa-linkedin-in fa-lg fa-fw"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fab fa-pinterest fa-lg fa-fw"></i></a>
                            </li>
                        </ul>
				</div>
			</div>
		);
	}
}
export default Home;