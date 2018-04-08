import React, { Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";

class ProductList extends React.Component{
	render(){
		return(
			<div className="container-fluid">
				<div className="row px-md-5 py-md-3">
					<nav aria-label="breadcrumb ">
					  <ol class="breadcrumb bg-white">
					    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li class="breadcrumb-item"><Link to="/shop">Shop</Link></li>
					    <li class="breadcrumb-item active" aria-current="page">Products List</li>
					  </ol>
					</nav>
					<div className="w-100 border-bottom-dashed mx-md-3"></div>
				</div>
				<div className="row px-md-5 py-md-4">
					<div className="col-md-8">
						<div className="row">
							<div className="col-md-3">
								<div className="shorting">Default sorting <i class="fas fa-chevron-down fa-xs"></i></div>
							</div>
							<p className="font-weight-bold color-main shorting-text">Showing all 7 results</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ProductList;