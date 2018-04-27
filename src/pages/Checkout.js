import React, { Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import ScrollToTop from '../components/scrollOnTop';
import QuantityCount from '../components/QuantityCount';
import CartStore from '../stores/cartStore';
import * as CartActions from '../actions/CartActions';


class CheckoutPage extends React.Component{
	constructor(){
		super();
		this.state={
			carts: CartStore.getAll(),
			fields: {email: "",name: "", phone: "", address:"", city:""},
			errors: {},
			isValid: false
		}
	}
	componentWillMount() {
        CartStore.on("change", () => {
            this.setState({carts: CartStore.getAll()});
        })
    }
    handleChange(e){
    	let name=e.target.name
    	let fields=this.state.fields;
    	fields[name]=e.target.value;
    	this.setState({fields},()=>this.validateFields(this.state.fields[name],name));
    }
    validateFields(fValue,fName){
    	let error="";
    	let errors = this.state.errors;
    	if (fValue=="" && fName !="taxcode"){
    		error="This field cannot be empty!";
    		} else{
    			switch (fName){
    				case "email":{
    					let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 						if (!re.test(fValue.toLowerCase())) {error="Invalid email!";};
 						break;
    				}
    				case "name":{
    					let re = /^[a-zA-Z ]{2,30}$/;
    					if (!re.test(fValue)) {error="Invalid name!";}; 
    					break;
    				}
    				case "phone":{
    					let re = /^(01[2689]|09)[0-9]{8}$/;
    					if (!re.test(fValue)) {error="Invalid phone number!";}; 
    					break;
    				}
    			}
    		};
    	errors[fName]=error;
    	this.setState({errors});
    }
    validateForm(e){
    	e.preventDefault();
    	let errors = this.state.errors;
    	let isValid=true;
    	Object.keys(this.state.fields).map((k)=>{
    		if (this.state.fields[k]==""){isValid=false;errors[k]="This field cannot be empty!"}
    		if (this.state.errors[k]!=""){isValid=false};
    	});
    	console.log(isValid);
    	this.setState({errors});
    	this.setState({isValid});
    }
    validateClass(i){
    	let valid = (this.state.errors[i]!="" &&this.state.errors[i]!= undefined)?true:false;
    	let validCl = "";
    	if (!valid) {validCl="is-invalid"};
    	return validCl;
    }
	render(){
		const {carts}=this.state;
		const info=this.state.fields;
		var subtotal = 0;
		 return(
			<div className="container-fluid blog">
			<ScrollToTop />
				<div className="row px-sm-3 px-lg-5 py-sm-3">
					<nav aria-label="breadcrumb ">
					  <ol className="breadcrumb bg-white">
					    <li className="breadcrumb-item"> <Link to="/">Home</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">Checkout</li>
					  </ol>
					</nav>
					<div className="w-100 border-bottom-dashed mx-sm-3"></div>
				</div>
				<div className="row px-sm-3 px-lg-5 py-4">
					<div className="col-sm-7 col-lg-9">
					<h4 className="w-100 mb-3">Shipping Address</h4>
						<form className={`checkout-form mb-5 ${(this.state.isValid)?"d-none":"d-block"}`} onSubmit={this.validateForm.bind(this)}>
						  <div className="form-row">
						    <div className="form-group col-sm-6 pr-sm-3">
						      <label>Email</label>
						      <input type="text" name="email" value={this.state.fields["email"]} onChange={this.handleChange.bind(this)} className={`form-control ${(this.state.errors["email"]!="" &&this.state.errors["email"]!= undefined)?"is-invalid":""}`} placeholder="Email"/>
						      <div class="invalid-feedback">
						      	{this.state.errors["email"]}
						       </div>
						    </div>
						    <div className="form-group col-sm-6 pl-sm-3">
						      <label>Address</label>
						      <input type="text" name="address" value={this.state.fields["address"]} onChange={this.handleChange.bind(this)} className={`form-control ${(this.state.errors["address"]!="" &&this.state.errors["address"]!= undefined)?"is-invalid":""}`} placeholder="Address"/>
						      <div class="invalid-feedback">
						      	{this.state.errors["address"]}
						       </div>
						    </div>
						  </div>
						  <div className="form-row">
						    <div className="form-group col-sm-6 pr-sm-3">
						      <label>Name</label>
						      <input type="text" name="name" value={this.state.fields["name"]} onChange={this.handleChange.bind(this)} className={`form-control ${(this.state.errors["name"]!="" &&this.state.errors["name"]!= undefined)?"is-invalid":""}`} placeholder="Name"/>
						      <div class="invalid-feedback">
						      	{this.state.errors["name"]}
						       </div>
						    </div>
						    <div className="form-group col-sm-6 pl-sm-3">
						      <label>City</label>
						      <input type="text" name="city" value={this.state.fields["city"]} onChange={this.handleChange.bind(this)} className={`form-control ${(this.state.errors["city"]!="" &&this.state.errors["city"]!= undefined)?"is-invalid":""}`} placeholder="City"/>
						      <div class="invalid-feedback">
						      	{this.state.errors["city"]}
						       </div>
						    </div>
						  </div>
						  <div className="form-row">
						    <div className="form-group col-sm-6 pr-sm-3">
						      <label>Phone Number</label>
						      <input type="number" name="phone" value={this.state.fields["phone"]} onChange={this.handleChange.bind(this)} className={`form-control ${(this.state.errors["phone"]!="" &&this.state.errors["phone"]!= undefined)?"is-invalid":""}`} placeholder="Phone Number"/>
						      <div class="invalid-feedback">
						      	{this.state.errors["phone"]}
						       </div>
						    </div>
						    <div className="form-group col-sm-6 pl-sm-3">
						      <label>Tax Code</label>
						      <input type="text" name="taxcode" value={this.state.fields["taxcode"]} onChange={this.handleChange.bind(this)} className="form-control" placeholder="Tax Code"/>
						    </div>
						  </div>
						  <button type="submit" className="btn btn-danger btn-lm mt-2">SAVE INFORMATION</button>
						</form>
						<div className={`${(carts.length >0)?"d-block":"d-none"}`}>

							<div className="row no-gutters mr-sm-5 font-weight-bold d-none d-lg-flex">
								<div className="col-sm-6">PRODUCT</div>
								<div className="col-sm-2">QUANTITY</div>
								<div className="col-sm-2">PRICE</div>
								<div className="col-sm-2">TOTAL</div>
							</div>
							{carts.map((item)=>{
								subtotal+= item.price*item.quantity;
								return <div className="row no-gutters cartpg-item py-3 mr-lg-5" key={item.id}>
									<div className="col-lg-6">
									<img className="w-25 float-lg-left float-right" src={require('../images/'+item.img + '.png')} />
									<ul className="list-unstyled ml-lg-2 pr-lg-3 w-100">
							            <li className="pb-1 name">{item.name}</li>
							            <li className="pb-1">SKU: N/A</li>
							            <li className="pb-1">Size: 3.5 oz</li>
							            <li className="remove" ><span onClick={CartActions.deleteItem.bind(this,item.id)}>Remove Item</span></li>
							        </ul>   
									</div>
									<div className="col-lg-2 col-5 order-3">
										<div className="row cart-quatity pr-lg-5">
											<QuantityCount qty={item.quantity} idItem={item.id} />
										</div>	
									</div>
									<div className="col-lg-2 col-3 order-2 pt-2 pt-lg-0">{item.price.toFixed(2)}$</div>
									<div className="col-lg-2 col-4 pt-2 pt-lg-0 order-4 font-weight-bold text-right text-lg-left">{(item.price*item.quantity).toFixed(2)}$</div>
								</div>
							})}
						</div>
						<div className={(carts.length >0)?"d-none":"d-block"}><p>Your cart is currently empty.</p><Link className="btn button1 text-white" to="/shop">Return to shop</Link></div>
					</div>
					<div className="col-sm-5 col-lg-3 px-sm-0">
							<div className="subscribe-follow summary">
								<div className="subscribe text-left">
									<div className={`${(this.state.isValid)?"d-block":"d-none"}`}>
							        	<h4 className="py-3 font-weight-bold">Shipping To</h4>
										<ul className="list-unstyled py-2">
								            <li className="pb-1">{info.name}</li>
								            <li className="pb-1">{info.address+", "+info.city}</li>
								            <li className="pb-1">{info.phone}</li>
								        </ul>
									</div>
									<h4 className="py-3 font-weight-bold">Order Summary</h4>
									<ul className="list-unstyled py-2">
							            <li className="pb-1">Subtotal <span className="float-right">{subtotal.toFixed(2)}$</span></li>
							            <li className="pb-1">Shipping <span className="float-right">0.00$</span></li>
							            <li className="pb-1">Tax <span className="float-right">0.00$</span></li>
							        </ul>
							        <h6 className="font-weight-bold pb-2">ESTIMATED TOTAL <span className="float-right">{subtotal.toFixed(2)}$</span></h6>
									<button type="submit" disabled={!this.state.isValid} className="btn btn-secondary btn-lm btn-block mb-3">CONFIRM PAYMENT</button>
								</div>
							</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CheckoutPage;