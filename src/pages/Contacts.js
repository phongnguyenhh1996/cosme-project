import React, { Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";

class Contacts extends React.Component{
	render(){
		return(
<div className="container-fluid contacts">
	<div className="row px-md-5 py-md-3">
					<nav aria-label="breadcrumb ">
					  <ol class="breadcrumb bg-white">
					    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
					    <li class="breadcrumb-item active" aria-current="page">Contacts</li>
					  </ol>
					</nav>
					<div className="w-100 border-bottom-dashed mx-md-3"></div>
				</div>

 <div className="row px-md-5 py-md-4">
	<div  className="col-xs-12 col-md-9 col-xl-9">

<h2>Contact info</h2>
<p>We are always ready to help you. There are many ways to contact us.
 You may drop us a line, give us a call or send an email, choose what suits you most.</p>
<p><strong>Address:</strong>  The Company Name Inc. 9870 St Vincent Place, Glasgow, DC 45 Fr 45</p>
<p><strong>Telephone:</strong>
<a href="#"> +1 800 603 6035</a>
</p>
<p><strong>FAX:</strong>
<a href="#"> +1 800 889 9898</a>

</p>
<p><strong>E-mail: </strong>
<a href="#">mail@demolink.org</a>

</p>
<div className="w-100 border-bottom-dashed mx-md-9"></div>
	</div>
<div className="col-md-3">
						<div className="row">
							<div className="col-md-12 ">

					<h2>Making your diet healthier since 1992…</h2>
							</div>
						</div>
</div>

</div>





</div>
		);
	}
}
export default Contacts;