import React, { Component } from 'react';
import CartStore from '../stores/cartStore';

class Cart extends React.Component{
	constructor(){
		super()
		this.state = {
			cart: CartStore.getAll()
		}
	}
	componentWillMount() {
        CartStore.on("change", () => {
            this.setState({cart: CartStore.getAll()});
        })
    }
	render(){
		const {cart} = this.state;
		var subtotal = 0;
		return(
			<li className="nav-item dropdown shopping-cart">
	            <a className="nav-link " href="#" role="button" id="dropdownCart" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-shopping-cart fa-lg"></i><span className="badge badge-pill bg-main text-white">{cart.length}</span></a>
	              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownCart">
	                <h4 className="mb-md-3">My Cart</h4>
	                <div className="cart-content pt-md-3">
						{ cart.map((item)=>{
							subtotal+= item.price*item.quantity;
						return	<div key={item.id} className="cart-item clearfix mb-md-3">
						          <img src={require('../images/'+ item.img)} />
						          <ul className="list-unstyled ml-md-5">
						            <li className="pb-md-2"><a href="#">{item.name}</a></li>
						            <li>{item.quantity} x <span className="price">{(item.price*item.quantity).toFixed(2)}$</span></li>
						          </ul>
						          <button className="btn"><i className="fas fa-times"></i></button>
						        </div>
						}
							)}
			        </div>
	                <h4 className="my-md-3 subtotal">SUBTOTAL: <span className="price">{subtotal.toFixed(2)}$</span></h4>
	                <a href="#" className="btn view-card w-100 mb-md-3">VIEW CART</a>
	                <a href="#" className="btn check-out w-100">CHECK OUT</a>
	              </div>   
	        </li>
		);
	}
}


export default Cart;