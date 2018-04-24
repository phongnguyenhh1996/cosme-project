import React, { Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import ScrollToTop from '../components/scrollOnTop';
import QuantityCount from '../components/QuantityCount';
import CartStore from '../stores/cartStore';
import * as CartActions from '../actions/CartActions';


class CartPage extends React.Component{
	constructor(){
		super();
		this.state={
			carts: CartStore.getAll()
		}
	}
	componentWillMount() {
        CartStore.on("change", () => {
            this.setState({carts: CartStore.getAll()});
        })
    }
	render(){
		const {carts}=this.state;
		var subtotal = 0;
		 return(
			<div className="container-fluid blog">
			<ScrollToTop />
				<div className="row px-md-5 py-md-3">
					<nav aria-label="breadcrumb ">
					  <ol className="breadcrumb bg-white">
					    <li className="breadcrumb-item"> <Link to="/">Home</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">Cart</li>
					  </ol>
					</nav>
					<div className="w-100 border-bottom-dashed mx-md-3"></div>
				</div>
				<div className="row px-md-5 py-md-4">
					<h3 className="pb-md-5 w-100 pl-md-3">Shopping Cart</h3>
					<div className="col-xs-12 col-md-9 col-xl-9">
						<div className={`${(carts.length >0)?"d-block":"d-none"}`}>

							<div className="row no-gutters mr-md-5 font-weight-bold">
								<div className="col-md-6">PRODUCT</div>
								<div className="col-md-2">QUANTITY</div>
								<div className="col-md-2">PRICE</div>
								<div className="col-md-2">TOTAL</div>
							</div>
							{carts.map((item)=>{
								subtotal+= item.price*item.quantity;
								return <div className="row no-gutters cartpg-item py-md-3 mr-md-5" key={item.id}>
									<div className="col-md-6">
									<img className="w-25 float-left" src={require('../images/'+item.img + '.png')} />
									<ul className="list-unstyled ml-md-2 pr-md-3 w-100">
							            <li className="pb-md-1 name">{item.name}</li>
							            <li className="pb-md-1">SKU: N/A</li>
							            <li className="pb-md-1">Size: 3.5 oz</li>
							            <li className="remove" ><span onClick={CartActions.deleteItem.bind(this,item.id)}>Remove Item</span></li>
							        </ul>   
									</div>
									<div className="col-md-2">
										<div className="row cart-quatity pr-md-5">
											<QuantityCount qty={item.quantity} idItem={item.id} />
										</div>	
									</div>
									<div className="col-md-2">{item.price.toFixed(2)}$</div>
									<div className="col-md-2 font-weight-bold">{(item.price*item.quantity).toFixed(2)}$</div>
								</div>
							})}
						</div>
						<div className={(carts.length >0)?"d-none":"d-block"}><p>Your cart is currently empty.</p><Link className="btn button1 text-white" to="/shop">Return to shop</Link></div>
					</div>
					<div className={`col-md-3 px-md-0 ${(carts.length >0)?"d-block":"d-none"}`}>
							<div className="subscribe-follow summary">
								<div className="subscribe text-left">
									<h4 className="pt-md-3 mb-md-3 font-weight-bold">Order Summary</h4>
									<ul className="list-unstyled py-md-2">
							            <li className="pb-md-1">Subtotal <span className="float-right">{subtotal.toFixed(2)}$</span></li>
							            <li className="pb-md-1">Shipping <span className="float-right">0.00$</span></li>
							            <li className="pb-md-1">Tax <span className="float-right">0.00$</span></li>
							        </ul>
							        <h6 className="font-weight-bold pb-md-2">ESTIMATED TOTAL <span className="float-right">{subtotal.toFixed(2)}$</span></h6>
									<Link to="/checkout" className="btn btn-primary button1 text-white btn-block mb-md-3">PROCEED TO CHECKOUT</Link>
								</div>
							</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CartPage;