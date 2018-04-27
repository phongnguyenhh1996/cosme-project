import React, { Component } from 'react';
import CartStore from '../stores/cartStore';
import * as CartActions from '../actions/CartActions';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import { findDOMNode } from 'react-dom';
import $ from "jquery";


class CartContent extends React.Component{
	constructor(props){
		super(props);
		this.state={
			choose: null
		}
	}
	deleteItem(idItem){
		this.setState({choose: idItem},()=>this.fadeItem(this.state.choose));
	}
	fadeItem(idItem){
		let el = findDOMNode(this.refs.allItem);
		$(el).find(".choose").fadeOut("500");
		setTimeout(()=>CartActions.deleteItem(idItem),400);
	}
	render(){
		var subtotal = 0;
		return(
			<div>
			<div ref="allItem" className="cart-content pt-3">
							{ this.props.itemss.map((item)=>{
								subtotal+= item.price*item.quantity;
							return	<div key={item.id} className={`cart-item clearfix mb-3 d-flex align-items-center ${(this.state.choose)==item.id?"choose":""}`}>
							          <img src={require('../images/'+item.img + '.png')} />
							          <ul className="list-unstyled float-left ml-lg-2 pr-lg-3 w-100">
							            <li className="pb-1"><a href="#">{item.name}</a></li>
							            <li>{item.quantity} x <span className="price">{(item.price*item.quantity).toFixed(2)}$</span></li>
							            <button className="btn" onClick={this.deleteItem.bind(this,item.id)}><i className="fas fa-times"></i></button>
							          </ul>   
							        </div>
							}
								)}
				        </div>
				        <h4 className="my-3 pt-3 subtotal">SUBTOTAL: <span className="price">{subtotal.toFixed(2)}$</span></h4>
				        <Link onClick={this.props.showDropdown} to="/cart" className="btn view-card w-100 mb-3">VIEW CART</Link>
				        <Link onClick={this.props.showDropdown} to="/checkout" className="btn check-out w-100">CHECK OUT</Link>
			</div>
		);
	}
}

class Cart extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			cart: CartStore.getAll()
		}
	}
	componentWillMount() {
        CartStore.on("change", () => {
            this.setState({cart: CartStore.getAll()});
        })
    }
    buttonClick(){
    	let els= findDOMNode(this.refs.dropdownMenu);
    	$(els).removeClass("show");
    	console.log("done");
    }
    toggleDropdown(e){
    	e.preventDefault();
    	let els= findDOMNode(this.refs.dropdownMenu);
    	if($(els).hasClass("show")){$(els).removeClass("show")}
    		else{$(els).addClass("show")}
    }
	render(){
		const {cart} = this.state;
		return(
			<li className="nav-item shopping-cart">
	            <a className="nav-link" onClick={this.toggleDropdown.bind(this)} href="#" role="button" id="dropdownCart" ><i className="fas fa-shopping-cart fa-lg"></i><span className="badge badge-pill bg-main text-white">{cart.length}</span></a>
	              <div ref="dropdownMenu" className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownCart">
	                <h4 className="pb-3 border-bottom">My Cart</h4>
	                {(cart.length>0) ? <CartContent showDropdown={()=>this.buttonClick()} itemss={cart}/> : "No products in the cart."}
	                <button className="btn close" onClick={()=>this.buttonClick()}><i className="fas fa-times"></i></button>
	              </div>   
	        </li>
		);
	}
}


export default Cart;