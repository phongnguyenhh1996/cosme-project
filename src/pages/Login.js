import React, { Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import ScrollToTop from '../components/scrollOnTop';


class Login extends React.Component{
	constructor(props){
		super();
			this.state={
				email:" ",
				pass:" "
			};
			this.onChangePass=this.onChangePass.bind(this);
    this.onChangeEmail=this.onChangeEmail.bind(this);

		}


		onChangeEmail(e){
			this.setState({email: e.target.value
         
      })
		}
		onChangePass(e){
			this.setState({pass: e.target.value
         
      })
		}
		onSubmit (e)  {
        e.preventDefault();
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
					<div className="row px-md-5 py-md-4  form-login-register">
						<div className=" col-xs-12 col-md-6 col-xl-6">
						
							<h2 className="pt-md-5 pb-md-4"><b> Login</b></h2>
							<form className="form-login pt-md-5" onSubmit={this.onSubmit}>
							
								<div class="form-group">
								    <label for="formGroupExampleInput2">Username or email address <span>*</span></label>
								    <input type="email" class="form-control" onChange={this.onChangeEmail} required />
								</div>
								<div class="form-group">
								    <label >Password  <span>*</span></label>
								    <input type="password" class="form-control" onChange={this.onChangePass} pattern="[a-zA-z0-9]{9,}" required />
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
						
						<h2 className="pt-md-5 pb-md-4"><b> Register</b></h2>
						<form  className="form-register pt-md-5" onSubmit={this.onSubmit}>
							
								<div class="form-group">
								    <label for="formGroupExampleInput2">Email address <span>*</span></label>
								    <input type="email" class="form-control"/>
								</div>
								<div class="form-group">
								    <label >Password  <span>*</span></label>
								    <input type="password" class="form-control"/>
								</div>
								<div className="form-group my-1">
									<button type="submit" class="btn btn-primary button1">Register</button>

								</div>

							
							

							</form>
						</div>
					</div>

				</div>

		);
	}
}
export default Login;