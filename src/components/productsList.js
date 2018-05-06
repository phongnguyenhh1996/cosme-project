import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from "react-router-dom";
import * as CartActions from '../actions/CartActions';
import cartStore from '../stores/cartStore';
import RateStar from '../components/rateStar';

class AddToCart extends React.Component{
	constructor(props){
		super(props);
	}
	addItem(){
		let item = this.props.item;
		CartActions.addItem(item.id,item.name,item.price,item.img);
	}
	render(){
		return(
			<button className="btn btn-outline-secondary" onClick={this.addItem.bind(this)}>ADD TO CART
			</button>
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
			if (prd.featured){return	<div className="col-lg-3 products" key={prd.id}>
			      	  	<RateStar star={prd.star}/>
			      	  	<div className="product-image product-featured">
				      	<Link to={"/shop/product_list/"+prd.name}><img className="img-fluid" src={require('../images/'+prd.img + '.png')} alt="First slide"/></Link>
				      	</div>
				      	<p className="text-secondary font-italic mt-lg-3">{prd.tags.map((tag) => tag + ", ")}</p>
				      	<p className="font-weight-bold">{prd.name}</p>
				      	<p className="color-main2 font-weight-bold">{prd.price.toFixed(2)}$</p>
				      	<AddToCart item={prd}/>
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
				if (prd.sale){return	<div className="col-lg-3 products" key={prd.id}>
				      	  	<RateStar star={prd.star}/>
				      	  	<div className="product-image product-sale">
					      	<Link to={"/shop/product_list/"+prd.name}><img className="img-fluid" src={require('../images/'+prd.img + '.png')} alt="First slide"/></Link>
					      	</div>
					      	<p className="text-secondary font-italic mt-lg-3">{prd.tags.map((tag) => tag + ", ")}</p>
					      	<p className="font-weight-bold">{prd.name}</p>
					      	<p className="color-main2 font-weight-bold">{prd.price.toFixed(2)}$<span className="text-secondary ml-lg-2">{prd.oldprice.toFixed(2)}$</span></p>
					      	<AddToCart item={prd}/>
				      	</div>}}
				)
				}
			      </div>
				);
			} else{
				return(
				<div className="row py-lg-4">
				{prds.map((prd) =>{
					let status="";
					let salePrice=[];
							if (prd.featured) status="product-image product-featured"
							 else if (prd.sale) {status="product-image product-sale";salePrice= <span className="text-secondary ml-lg-2">{prd.oldprice.toFixed(2)}$</span>}
					return	<div className="col-lg-4 products text-center my-lg-4" key={prd.id}>
				      	  	<RateStar star={prd.star}/>
				      	  	<div className={status}>
					      	<Link to={"/shop/product_list/"+prd.name}><img className="img-fluid" src={require('../images/'+prd.img + '.png')} alt="First slide"/></Link>
					      	</div>
					      	<p className="text-secondary font-italic mt-lg-3">{prd.tags.map((tag) => tag + ", ")}</p>
					      	<p className="font-weight-bold">{prd.name}</p>
					      	<p className="color-main2 font-weight-bold">{prd.price.toFixed(2)}$ {salePrice}</p>
					      	<AddToCart item={prd}/>
				      	</div>}
				)
				}
			      </div>
				);
			}
	}
}

export default ProductsList;