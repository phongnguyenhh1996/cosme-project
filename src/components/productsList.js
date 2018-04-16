import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class RateStar extends React.Component{
	render(){
		let count=this.props.star;
		let stars=[];
		if (count == 0){
			return(
				<div className="rate-star">
			   		<i className="fas fa-star fa-xs text-white"></i><i className="fas fa-star fa-xs text-white"></i><i className="fas fa-star fa-xs text-white"></i><i className="fas fa-star fa-xs text-white"></i><i className="fas fa-star fa-xs text-white"></i>
				</div>
			)
		} else{
		for (var i = 1; i <= 5; i++){
			if (count > 0){stars.push(<i className="fas fa-star fa-xs"></i>) ;count= count-1;}
				else {stars.push(<i className="fas fa-star fa-xs text-secondary"></i>);}
		}};
		return(
			<div className="rate-star">
			   {stars}
			</div>
		);
	}
}

class ProductsList extends React.Component{
	render(){
		const prds = this.props.prds;
		let show = this.props.showprd;
		if (show == "featured") {
			return(
			<div className="row text-center">
			{prds.map((prd) =>{
			if (prd.featured){return	<div className="col-md-3 products" key={prd.id}>
			      	  	<RateStar star={prd.star}/>
			      	  	<div className="product-image product-featured">
				      	<Link to="/shop/product_list/product_detail"><img className="img-fluid" src={require('../images/'+prd.img)} alt="First slide"/></Link>
				      	</div>
				      	<p className="text-secondary font-italic mt-md-3">{prd.tags.map((tag) => tag + ", ")}</p>
				      	<p className="font-weight-bold">{prd.name}</p>
				      	<p className="color-main2 font-weight-bold">{prd.price.toFixed(2)}$</p>
				      	<button className="btn btn-outline-secondary">ADD TO CART</button>
			      	</div>}}
			)
			}
		      </div>
			);
			}
			else if (show=="sale"){
				return(
				<div className="row text-center">
				{prds.map((prd) =>{
				if (prd.sale){return	<div className="col-md-3 products" key={prd.id}>
				      	  	<RateStar star={prd.star}/>
				      	  	<div className="product-image product-sale">
					      	<Link to="/shop/product_list/product_detail"><img className="img-fluid" src={require('../images/'+prd.img)} alt="First slide"/></Link>
					      	</div>
					      	<p className="text-secondary font-italic mt-md-3">{prd.tags.map((tag) => tag + ", ")}</p>
					      	<p className="font-weight-bold">{prd.name}</p>
					      	<p className="color-main2 font-weight-bold">{prd.price.toFixed(2)}$<span className="text-secondary ml-md-2">{prd.oldprice.toFixed(2)}$</span></p>
					      	<button className="btn btn-outline-secondary">ADD TO CART</button>
				      	</div>}}
				)
				}
			      </div>
				);
			} else{
				return(
				<div className="row py-md-4">
				{prds.map((prd) =>{
					let status="";
					let salePrice=[];
							if (prd.featured) status="product-image product-featured"
							 else if (prd.sale) {status="product-image product-sale";salePrice= <span className="text-secondary ml-md-2">{prd.oldprice.toFixed(2)}$</span>}
					return	<div className="col-md-4 products text-center my-md-4" key={prd.id}>
				      	  	<RateStar star={prd.star}/>
				      	  	<div className={status}>
					      	<Link to="/shop/product_list/product_detail"><img className="img-fluid" src={require('../images/'+prd.img)} alt="First slide"/></Link>
					      	</div>
					      	<p className="text-secondary font-italic mt-md-3">{prd.tags.map((tag) => tag + ", ")}</p>
					      	<p className="font-weight-bold">{prd.name}</p>
					      	<p className="color-main2 font-weight-bold">{prd.price.toFixed(2)}$ {salePrice}</p>
					      	<button className="btn btn-outline-secondary">ADD TO CART</button>
				      	</div>}
				)
				}
			      </div>
				);
			}
	}
}

export default ProductsList;