import React, { Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import ScrollToTop from '../components/scrollOnTop';


class Login extends React.Component{
	constructor(props){
		super(props);
		this.state={
			fields: {email: "",name: "", phone: "", address:"", city:"", pass: "", repass:""},
			errors: {},
			isValid: false
		}
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
		 return(	
				<div className="container-fluid blog">
				<ScrollToTop />
					<div className="row px-md-5 py-md-3">
						<nav aria-label="breadcrumb ">
						  <ol className="breadcrumb bg-white">
						    <li className="breadcrumb-item"> <Link to="/">Home</Link></li>
						    <li className="breadcrumb-item active" aria-current="page">My Account</li>
						  </ol>
						</nav>
					<div className="w-100 border-bottom-dashed mx-md-3">
					</div>
					</div>
					<div className="row px-md-5 py-4 form-login-register">
						<div className=" col-xs-12 col-md-6 col-xl-6">
						
							<h2 className="pt-5 pb-4"><b> Login</b></h2>
							<form className="form-login pt-5" onSubmit={this.onSubmit}>
							
								<div class="form-group">
								    <label for="formGroupExampleInput2">Username or email address <span>*</span></label>
								    <input type="email" class="form-control" required />
								</div>
								<div class="form-group">
								    <label >Password  <span>*</span></label>
								    <input type="password" class="form-control" required />
								</div>
								<div className="form-group my-1">
									<button type="submit" class="btn btn-primary button1">Login</button>

								</div>

								<div class="form-check my-1">
								    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
								    <label class="form-check-label" for="exampleCheck1">Remember me</label>
								</div>
								<div>
									<a href="#"> Lost your password?</a>
								</div>
						
							
							</form>

						</div>	
						<div className=" col-xs-12 col-md-6 col-xl-6">
						
						<h2 className="pt-5 pb-4"><b> Register</b></h2>
						<form className={`checkout-form form-login mb-5 ${(this.state.isValid)?"d-none":"d-block"}`} onSubmit={this.validateForm.bind(this)}>
						  <div className="form-row">
						    <div className="form-group col-md-6 pr-md-3">
						      <label>Email</label>
						      <input type="text" name="email" value={this.state.fields["email"]} onChange={this.handleChange.bind(this)} className={`form-control ${(this.state.errors["email"]!="" &&this.state.errors["email"]!= undefined)?"is-invalid":""}`} placeholder="Email"/>
						      <div class="invalid-feedback">
						      	{this.state.errors["email"]}
						       </div>
						    </div>
						    <div className="form-group col-md-6 pl-md-3">
						      <label>Address</label>
						      <input type="text" name="address" value={this.state.fields["address"]} onChange={this.handleChange.bind(this)} className={`form-control ${(this.state.errors["address"]!="" &&this.state.errors["address"]!= undefined)?"is-invalid":""}`} placeholder="Address"/>
						      <div class="invalid-feedback">
						      	{this.state.errors["address"]}
						       </div>
						    </div>
						  </div>
						  <div className="form-row">
						    <div className="form-group col-md-6 pr-md-3">
						      <label>Name</label>
						      <input type="text" name="name" value={this.state.fields["name"]} onChange={this.handleChange.bind(this)} className={`form-control ${(this.state.errors["name"]!="" &&this.state.errors["name"]!= undefined)?"is-invalid":""}`} placeholder="Name"/>
						      <div class="invalid-feedback">
						      	{this.state.errors["name"]}
						       </div>
						    </div>
						    <div className="form-group col-md-6 pl-md-3">
						      <label>City</label>
						      <input type="text" name="city" value={this.state.fields["city"]} onChange={this.handleChange.bind(this)} className={`form-control ${(this.state.errors["city"]!="" &&this.state.errors["city"]!= undefined)?"is-invalid":""}`} placeholder="City"/>
						      <div class="invalid-feedback">
						      	{this.state.errors["city"]}
						       </div>
						    </div>
						  </div>
						  <div className="form-row">
						    <div className="form-group col-md-6 pr-md-3">
						      <label>Password</label>
						      <input type="password" name="pass" value={this.state.fields["pass"]} onChange={this.handleChange.bind(this)} className={`form-control ${(this.state.errors["pass"]!="" &&this.state.errors["pass"]!= undefined)?"is-invalid":""}`} placeholder="Password"/>
						      <div class="invalid-feedback">
						      	{this.state.errors["pass"]}
						       </div>
						    </div>
						    <div className="form-group col-md-6 pl-md-3">
						      <label>Retype Password</label>
						      <input type="password" name="city" value={this.state.fields["repass"]} onChange={this.handleChange.bind(this)} className={`form-control ${(this.state.errors["repass"]!="" &&this.state.errors["repass"]!= undefined)?"is-invalid":""}`} placeholder="Retype Password"/>
						      <div class="invalid-feedback">
						      	{this.state.errors["repass"]}
						       </div>
						    </div>
						  </div>
						  <div className="form-row">
						    <div className="form-group col-md-6 pr-md-3">
						      <label>Phone Number</label>
						      <input type="number" name="phone" value={this.state.fields["phone"]} onChange={this.handleChange.bind(this)} className={`form-control ${(this.state.errors["phone"]!="" &&this.state.errors["phone"]!= undefined)?"is-invalid":""}`} placeholder="Phone Number"/>
						      <div class="invalid-feedback">
						      	{this.state.errors["phone"]}
						       </div>
						    </div>
						    <div className="form-group col-md-6 pl-md-3">
						      <label>Tax Code</label>
						      <input type="text" name="taxcode" value={this.state.fields["taxcode"]} onChange={this.handleChange.bind(this)} className="form-control" placeholder="Tax Code"/>
						    </div>
						  </div>
						  <button type="submit" class="btn btn-primary button1">REGISTER</button>
						</form>
						</div>
					</div>

				</div>

		);
	}
}
export default Login;