import React, { Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import prdStore from '../stores/productsStore';
import ProductsList from '../components/productsList';
import Slider from "react-slick";

class ProductDetail extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
	render(){
		return(
			<div className="container-fluid">
				<div className="row px-md-5 py-md-3">
					<nav aria-label="breadcrumb ">
					  <ol className="breadcrumb bg-white">
					    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
					    <li className="breadcrumb-item"><Link to="/shop/product_list">Products List</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">Products Detail</li>
					  </ol>
					</nav>
					<div className="w-100 border-bottom-dashed mx-md-3"></div>
				</div>			
				<div className="row px-md-5 py-md-5">
					<div className="col-md-6 product-image-slide">
						<Slider className="img-big mb-md-5"
				          asNavFor={this.state.nav2}
				          ref={slider => (this.slider1 = slider)}
				          infinite={false}
				          arrows={false}
				        >
				          <div>
				            <img className="img-fluid mx-auto" src={require('../images/product-1-detail-1.png')}/>
				          </div>
				          <div>
				            <img className="img-fluid mx-auto" src={require('../images/product-1-detail-2.png')}/>
				          </div>
				          <div>
				            <img className="img-fluid mx-auto" src={require('../images/product-1-detail-3.png')}/>
				          </div>
				          <div>
				            <img className="img-fluid mx-auto" src={require('../images/product-1-detail-4.png')}/>
				          </div>
				          <div>
				            <img className="img-fluid mx-auto" src={require('../images/product-1-detail-5.png')}/>
				          </div>
				        </Slider>
				        <Slider
				          asNavFor={this.state.nav1}
				          ref={slider => (this.slider2 = slider)}
				          slidesToShow={4}
				          swipeToSlide={true}
				          focusOnSelect={true}
				          infinite={false}
				          arrows={true}
				        >
				          <div className="img-list">
				            <img className="img-fluid" src={require('../images/product-1-detail-1.png')}/>
				          </div>
				          <div className="img-list">
				            <img className="img-fluid" src={require('../images/product-1-detail-2.png')}/>
				          </div>
				          <div className="img-list">
				            <img className="img-fluid" src={require('../images/product-1-detail-3.png')}/>
				          </div>
				          <div className="img-list">
				            <img className="img-fluid" src={require('../images/product-1-detail-4.png')}/>
				          </div>
				          <div className="img-list">
				            <img className="img-fluid" src={require('../images/product-1-detail-5.png')}/>
				          </div>
				        </Slider>
					</div>
					<div className="col-md-6 product-detail">
						<div className="rate-star mb-md-3">
					   		<i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i>
						</div>
						<div className="clearfix mb-md-4">
							<h1 className="w-75">ALCOHOL-FREE HAND SANITIZER</h1>
							<p className="font-weight-bold color-main2 mb-md-0">46.00$</p>
							<a className="float-right" href="#">(2 customer reviews)</a>
						</div>
						<div className="product-meta pt-md-4 pb-md-2">
							<p>SKU: N/A</p>
							<p>Categories: <a href="#">Amino Acids</a>, <a href="#">Antioxidants</a>, <a href="#">Multivitamins</a></p>
							<p>Tags: <a href="#">food</a>, <a href="#">nutrition</a></p>
						</div>
						<p className="pt-md-4">It is actually slightly more powerful as it contains 22% Vitamin C.</p>
						<div className="cart row py-md-4">
							<div className="cart-quatity col-md-6">
								<div className="form-row">
								    <div class="input-group mb-2 col">
									  <div class="input-group-prepend">
									    <span class="input-group-text">-</span>
									  </div>
									  <input type="number" value="1" class="form-control" aria-label="Amount (to the nearest dollar)"/>
									  <div class="input-group-append">
									    <span class="input-group-text">+</span>
									  </div>
									</div>
								  	<div className="col">
								  	<button className="btn button1 text-white font-weight-bold">ADD TO CART</button>
								  	</div>
								</div>
							</div>
						</div>
						<div className="widget pt-md-3">
							<ul className="nav social1 ">
	                        <li className="nav-item">
	                             <a className="nav-link" href="#"><i className="fab fa-facebook-f fa-sm"></i></a>
	                        </li>
	                        <li className="nav-item">
	                            <a className="nav-link" href="#"><i className="fab fa-twitter fa-sm"></i></a>
	                        </li>
	                        <li className="nav-item">
	                            <a className="nav-link" href="#"><i className="fab fa-google-plus-g fa-sm"></i></a>
	                        </li>
	                        <li className="nav-item">
	                            <a className="nav-link" href="#"><i className="fab fa-linkedin-in fa-sm"></i></a>
	                        </li>
	                        <li className="nav-item">
	                        <a className="nav-link" href="#"><i className="fab fa-pinterest fa-sm"></i></a>                            </li>
                        </ul>
						</div>
					</div>
				</div>
				<div className="row px-md-5 pb-md-5">
					<div className="col-md-12 product-tab">
						<nav>
						  <div class="nav" id="nav-tab" role="tablist">
						    <a class="nav-item nav-link active mr-md-5 pb-md-4" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">DESCRIPTION</a>
						    <a class="nav-item nav-link mr-md-5 pb-md-4" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">ADDITIONAL INFORMATION</a>
						    <a class="nav-item nav-link pb-md-4" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">REVIEWS (2)</a>
						  </div>
						</nav>
						<div class="tab-content py-md-5" id="nav-tabContent">
						  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
						  <h5 className="pb-md-3">Description</h5>
						  <p>
						  	We Are Committed To Providing A Safe 100 percent Vegan Product Made From The Finest Natural And Organic Ingredients And Formulated In A FDA Registered Facility In The USA. serumtologie C serum 22 Does NOT Contain Parabens, Phthalates, Petrochemicals, Sulfates. Synthetic Dyes, Aromas or GMO’s. In addition, the ingredients in our exclusive formulation have a 1 risk rating as determined by the extensive database maintained by the EWG (Environmental Working Group).
						  </p>
						  </div>
						  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
						  <h5 className="pb-md-3">Additional Information</h5>
						  <table class="table table-bordered">
							    <tr>
							      <th className="w-25">Brand</th>
							      <td>JASON Kids</td>
							    </tr>
							    <tr>
							      <th>Manufacturer</th>
							      <td>Italy</td>
							    </tr>
							    <tr>
							      <th>Concern</th>
							      <td>Normal</td>
							    </tr>
							    <tr>
							      <th>Ecolabel</th>
							      <td>yes</td>
							    </tr>
							    <tr>
							      <th>Total Pieces</th>
							      <td>3</td>
							    </tr>
						  </table>
						  </div>
						  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
						  <h5 className="pb-md-3">2 Reviews for Alcohol-Free Hand Sanitizer</h5>
						  <div className="comment clearfix d-flex align-items-center p-md-4 mb-md-4">
						  	<img className="rounded-circle" src={require('../images/customer-avatar.png')} />
						  	<ul className="list-unstyled mb-md-0 ml-md-3">
						  		<li className="font-italic text-secondary">Posted by <span className="color-main2">admin</span>  •  <span className="color-main2">Sep 27, 2016</span></li>
						  		<li>"This store is the best, forget the rest!"</li>
						  		<li>
						  			<div className="rate-star">
								   		<i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i>
									</div>
						  		</li>
						  	</ul>
						  </div>
						  <div className="comment clearfix d-flex align-items-center p-md-4 ml-5 mb-md-4">
						  	<img className="rounded-circle" src={require('../images/customer-avatar.png')} />
						  	<ul className="list-unstyled mb-md-0 ml-md-3 w-75">
						  		<li className="font-italic text-secondary">Posted by <span className="color-main2">admin</span>  •  <span className="color-main2">Sep 27, 2016</span></li>
						  		<li className="color-main2">"Exactly!"</li>
						  		<li> </li>
						  	</ul>
						  </div>
						  <div className="comment clearfix d-flex align-items-center p-md-4 mb-md-4">
						  	<img className="rounded-circle" src={require('../images/customer-avatar.png')} />
						  	<ul className="list-unstyled mb-md-0 ml-md-3">
						  		<li className="font-italic text-secondary">Posted by <span className="color-main2">admin</span>  •  <span className="color-main2">Sep 27, 2016</span></li>
						  		<li>"24/7 helpdesk is also available. I Love it!"</li>
						  		<li>
						  			<div className="rate-star">
								   		<i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i>
									</div>
						  		</li>
						  	</ul>
						  </div>
						  <div className="comment clearfix d-flex align-items-center p-md-4 ml-5">
						  	<img className="rounded-circle" src={require('../images/customer-avatar.png')} />
						  	<ul className="list-unstyled mb-md-0 ml-md-3 w-75">
						  		<li className="font-italic text-secondary">Posted by <span className="color-main2">admin</span>  •  <span className="color-main2">Sep 27, 2016</span></li>
						  		<li className="color-main2">"Thank you!"</li>
						  		<li> </li>
						  	</ul>
						  </div>
						  <div className="add-review mt-md-5">
						  	<h5 className="pb-md-3">Add a review</h5>
						  	<form className="w-50">
						  	  <div class="form-group">
							    <label>Your Rating: </label> <i className="fas fa-star text-secondary fa-xs"></i><i className="fas fa-star text-secondary fa-xs"></i><i className="fas fa-star text-secondary fa-xs"></i><i className="fas fa-star text-secondary fa-xs"></i><i className="fas fa-star text-secondary fa-xs"></i>			
							  </div>
							  <div class="form-group">
							    <label for="review">Your Review: </label>
							    <textarea type="email" class="form-control" id="review" aria-describedby="emailHelp" cols="45" rows="8"></textarea>
							  </div>
							  <div class="form-group">
							    <label for="name">Your Name: </label>
							    <input type="password" class="form-control" id="name" />
							  </div>
							  <div class="form-group">
							    <label for="email">Your Email: </label>
							    <input type="email" class="form-control" id="email" />
							  </div>
							  <button type="submit" class="btn button1 text-white">Submit</button>
							</form>
						  </div>
						  </div>
						</div>
					</div>
					<div className="col-md-12">
						<h3 className="text-center title w-100 py-md-5"><span className="font-weight-bold">RELATED</span> PRODUCTS</h3>
						<ProductsList prds={prdStore.getAll()} showprd="featured"/>
					</div>
				</div>
			</div>
		);
	}
}
export default ProductDetail;