import React, { Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import prdStore from '../stores/productsStore';
import ProductsList from '../components/productsList';
import Slider from "react-slick";
import RateStar from '../components/rateStar';
import ScrollToTop from '../components/scrollOnTop';
import AddToCart from '../components/addToCart';
import QuantityCount from '../components/QuantityCount';
import * as CartActions from '../actions/CartActions';

class AddCartDetail extends React.Component{
	constructor(props){
        super(props);
        this.state={count: 1};
    }
    updateQty(i){
        if (i>0){
            this.setState({count: i});
        }   
    }
    handleChange(event) {
    this.setState({count: event.target.value});
	}
    addToCart(){
    	let item = this.props.item;
    	CartActions.addItem(item.id,item.name,item.price,item.img,this.state.count);
    }
	render(){
		return(
			<div className="form-row">
			    <div className="input-group mb-2 col">
			      <div className="input-group-prepend">
			        <span className="input-group-text" onClick={this.updateQty.bind(this,(this.state.count-1))}>-</span>
			      </div>
			      <input type="number" value={this.state.count} className="form-control p-sm-0" onChange={this.handleChange.bind(this)}/>
			      <div className="input-group-append">
			        <span className="input-group-text" onClick={this.updateQty.bind(this,(this.state.count+1))}>+</span>
			      </div>
			    </div>
			  	<div className="col">
			  	<button onClick={this.addToCart.bind(this)} className="btn button1 text-white font-weight-bold">ADD TO CART</button>
			  	</div>
			</div>
		);
	}
}

class ProductsSlide extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render(){
  	let prdImg = this.props.prdImg;
  	var settings = {
	      responsive: [
	        {
	          breakpoint: 576,
	          settings: {
	            arrows: false
	          }
	        }
	      ]
	    };
  	return(
  		<div className="col-sm-6 product-image-slide">
			<Slider className="img-big mb-3 mb-sm-5"
	          asNavFor={this.state.nav2}
	          ref={slider => (this.slider1 = slider)}
	          infinite={false}
	          arrows={false}
	        >
	        {Array.apply(null, Array(6)).map((a,index)=> <div><img className="img-fluid" src={require('../images/'+prdImg+'-detail-'+(index+1)+'.png')}/></div>)}
	        </Slider>
	        <Slider
	          asNavFor={this.state.nav1}
	          ref={slider => (this.slider2 = slider)}
	          slidesToShow={4}
	          swipeToSlide={true}
	          focusOnSelect={true}
	          infinite={false}
	          arrows={true}
	          {...settings}
	        >
	          {Array.apply(null, Array(6)).map((a,index)=> <div className="img-list"><img className="img-fluid" src={require('../images/'+prdImg+'-detail-'+(index+1)+'.png')}/></div>)}
	        </Slider>
		</div>
  	);
  }
}

class ProductDetail extends React.Component{
	constructor(props) {
    super(props);
    this.state = {
      prds: prdStore.getAll()
    };
  }

	render(){
		const prds = this.state.prds;
		return(
			<div className="container-fluid">
			{prds.map((prd) =>{
				if (this.props.match.params.prdDetail == prd.name){return <div><ScrollToTop/><div className="row px-sm-3 px-lg-5 py-sm-3">
									<nav aria-label="breadcrumb ">
									  <ol className="breadcrumb bg-white">
									    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
									    <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
									    <li className="breadcrumb-item"><Link to="/shop/product_list">Products List</Link></li>
									    <li className="breadcrumb-item active" aria-current="page">{prd.name}</li>
									  </ol>
									</nav>
									<div className="w-100 border-bottom-dashed mx-sm-3"></div>
								</div>			
								<div className="row px-sm-3 px-lg-5 py-5">
									<ProductsSlide prdImg={prd.img}/>
									<div className="col-sm-6 product-detail">
										<div className="mb-3"><RateStar star={prd.star} /></div>	
										<div className="clearfix mb-4">
											<h1 className="w-75">{prd.name}</h1>
											<p className="font-weight-bold color-main2 mb-sm-0">{prd.price.toFixed(2)}$</p>
											<a className="float-right" href="#">(2 customer reviews)</a>
										</div>
										<div className="product-meta pt-4 pb-2">
											<p>SKU: N/A</p>
											<p>Categories: <a href="#">Amino Acids</a>, <a href="#">Antioxidants</a>, <a href="#">Multivitamins</a></p>
											<p className="tags">Tags: {prd.tags.map((tag) =>  <a href="#">{tag}</a>)}</p>
										</div>
										<p className="pt-sm-4">It is actually slightly more powerful as it contains 22% Vitamin C.</p>
										<div className="cart row py-4">
											<div className="cart-quatity col-sm-6">
												<AddCartDetail item={prd} />
											</div>
										</div>
										<div className="widget pt-3">
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
								</div></div>
				}
			})}
				
				<div className="row px-sm-3 px-lg-5 pb-5">
					<div className="col-sm-12 product-tab">
						<nav>
						  <div className="nav" id="nav-tab" role="tablist">
						    <a className="nav-item nav-link active mr-sm-5 pb-2 pb-sm-2" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">DESCRIPTION</a>
						    <a className="nav-item nav-link mr-sm-5 pb-2 pb-sm-2" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">ADDITIONAL INFORMATION</a>
						    <a className="nav-item nav-link pb-2 pb-sm-2" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">REVIEWS (2)</a>
						  </div>
						</nav>
						<div className="tab-content py-5" id="nav-tabContent">
						  <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
						  <h5 className="pb-3">Description</h5>
						  <p>
						  	We Are Committed To Providing A Safe 100 percent Vegan Product Made From The Finest Natural And Organic Ingredients And Formulated In A FDA Registered Facility In The USA. serumtologie C serum 22 Does NOT Contain Parabens, Phthalates, Petrochemicals, Sulfates. Synthetic Dyes, Aromas or GMO’s. In addition, the ingredients in our exclusive formulation have a 1 risk rating as determined by the extensive database maintained by the EWG (Environmental Working Group).
						  </p>
						  </div>
						  <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
						  <h5 className="pb-3">Additional Information</h5>
						  <table className="table table-bordered">
						  		<tbody>
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
							    </tbody>
						  </table>
						  </div>
						  <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
						  <h5 className="pb-3">2 Reviews for Alcohol-Free Hand Sanitizer</h5>
						  <div className="comment clearfix d-flex align-items-center p-2 p-sm-4 mb-4">
						  	<img className="rounded-circle" src={require('../images/customer-avatar.png')} />
						  	<ul className="list-unstyled mb-sm-0 ml-sm-3">
						  		<li className="font-italic text-secondary">Posted by <span className="color-main2">admin</span>  •  <span className="color-main2">Sep 27, 2016</span></li>
						  		<li>"This store is the best, forget the rest!"</li>
						  		<li>
						  			<div className="rate-star">
								   		<i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i>
									</div>
						  		</li>
						  	</ul>
						  </div>
						  <div className="comment clearfix d-flex align-items-center p-2 p-sm-4 ml-5 mb-4">
						  	<img className="rounded-circle" src={require('../images/customer-avatar.png')} />
						  	<ul className="list-unstyled mb-sm-0 ml-sm-3 w-75">
						  		<li className="font-italic text-secondary">Posted by <span className="color-main2">admin</span>  •  <span className="color-main2">Sep 27, 2016</span></li>
						  		<li className="color-main2">"Exactly!"</li>
						  		<li> </li>
						  	</ul>
						  </div>
						  <div className="comment clearfix d-flex align-items-center p-2 p-sm-4 mb-4">
						  	<img className="rounded-circle" src={require('../images/customer-avatar.png')} />
						  	<ul className="list-unstyled mb-sm-0 ml-sm-3">
						  		<li className="font-italic text-secondary">Posted by <span className="color-main2">admin</span>  •  <span className="color-main2">Sep 27, 2016</span></li>
						  		<li>"24/7 helpdesk is also available. I Love it!"</li>
						  		<li>
						  			<div className="rate-star">
								   		<i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i><i className="fas fa-star fa-xs"></i>
									</div>
						  		</li>
						  	</ul>
						  </div>
						  <div className="comment clearfix d-flex align-items-center p-2 p-sm-4 ml-5 mb-4">
						  	<img className="rounded-circle" src={require('../images/customer-avatar.png')} />
						  	<ul className="list-unstyled mb-sm-0 ml-sm-3 w-75">
						  		<li className="font-italic text-secondary">Posted by <span className="color-main2">admin</span>  •  <span className="color-main2">Sep 27, 2016</span></li>
						  		<li className="color-main2">"Thank you!"</li>
						  		<li> </li>
						  	</ul>
						  </div>
						  <div className="add-review mt-4 mt-sm-5">
						  	<h5 className="pb-3">Add a review</h5>
						  	<form className="w-50">
						  	  <div className="form-group">
							    <label>Your Rating: </label> <i className="fas fa-star text-secondary fa-xs"></i><i className="fas fa-star text-secondary fa-xs"></i><i className="fas fa-star text-secondary fa-xs"></i><i className="fas fa-star text-secondary fa-xs"></i><i className="fas fa-star text-secondary fa-xs"></i>			
							  </div>
							  <div className="form-group">
							    <label for="review">Your Review: </label>
							    <textarea type="email" className="form-control" id="review" aria-describedby="emailHelp" cols="45" rows="8"></textarea>
							  </div>
							  <div className="form-group">
							    <label for="name">Your Name: </label>
							    <input type="password" className="form-control" id="name" />
							  </div>
							  <div className="form-group">
							    <label for="email">Your Email: </label>
							    <input type="email" className="form-control" id="email" />
							  </div>
							  <button type="submit" className="btn button1 text-white">Submit</button>
							</form>
						  </div>
						  </div>
						</div>
					</div>
					<div className="col-sm-12 d-none d-lg-block">
						<div className="fb-like" data-href="https://developers.facebook.com/docs/plugins/" data-layout="standard" data-action="like" data-size="large" data-show-faces="false" data-share="true"></div>
					</div>
					<div className="col-sm-12 d-none d-lg-block">
						<div className="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="100%" data-numposts="2"></div>
					</div>
					<div className="col-sm-12">
						<h3 className="text-center title w-100 py-5"><span className="font-weight-bold">RELATED</span> PRODUCTS</h3>
						<div className="row py-4">
							{prds.map((prd,i) =>
							{	if (i<4){
								return	<div className="products px-sm-3 col-sm-3 text-center my-sm-4" key={prd.id}>
								      	  	<RateStar star={prd.star}/>
								      	  	<div className={`product-image product-${prd.status}`}>
									      	<Link to={"/shop/product_list/"+prd.name}><img className="img-fluid mx-auto" src={require('../images/'+prd.img + '.png')}/></Link>
									      	</div>
									      	<p className="text-secondary font-italic mt-sm-3">{prd.tags.map((tag) => tag + ", ")}</p>
									      	<p className="font-weight-bold">{prd.name}</p>
									      	<p className="color-main2 font-weight-bold">{prd.price.toFixed(2)}$<span className={`text-secondary ml-sm-2 ${(prd.status!="sale")?"d-none":""}`}>{(prd.status=="sale")?prd.oldprice.toFixed(2):""}$</span></p>
									      	<AddToCart item={prd} qty={1}/>
							      		</div>}
							}
							)}
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ProductDetail;