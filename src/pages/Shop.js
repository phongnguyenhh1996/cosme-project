import React, { Component } from 'react';

class Shop extends React.Component{
	render(){
		return(

            <div className="container-fluid page-shop">
			     <div className="row px-md-5 pb-md-5">
	<div id="primary" className="col-xs-12 col-md-8 col-xl-9">
<div className="row products">

		<div id="products" className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
		<a href="#">
		<img className src={require('../images/Amino Acids.jpg')} />	
		<h3 className="text-center">
		Amino Acids 	</h3>
	</a>	</div>
	<div id="products"  className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 ">
		<a  href="#">
		<img className="img-fluid" src={require('../images/Antioxidants.jpg')} />
		<h3 className="text-center">
		Antioxidants	</h3>
	</a>	</div>
	<div id="products"  className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
		<a   href="#">
		<img className="img-fluid" src={require('../images/Multivitamins.jpg')} />
		<h3 className="text-center">
		Multivitamins	</h3>
	</a>	</div>
	<div  id="products" className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 product-category product">
		<a  href="#">
		<img className="img-fluid" src={require('../images/Organic Cosmetics.jpg')} />
		<h3 className="text-center">
		Organic Cosmetics </h3>
	</a>	</div>
	<div id="products" className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 product-category product first">
		<a  href="#">
		<img className="img-fluid" src={require('../images/Organic Food.jpg')} />
		<h3 className="text-center">
		Organic Food 	</h3>
	</a>	</div>
	<div id="products" className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 product-category product last">
		<a   href="#">
			<img className="img-fluid" src={require('../images/Vitamins & Minerals.jpg')} />
		<h3 className="text-center">
		Vitamins &amp; Minerals 	</h3>
	</a>	
	</div>
	</div>
	</div>

<div id="sidebar" className="col-xs-12 col-md-4 col-xl-3 sidebar widget-area" role="complementary">
<aside id="aside-browse" className="browse"><h3 className="widget-title"><span>Browse</span>
</h3><ul className="product-categories">
<li className="nav-item1"><a  href="#">Amino Acids</a><span> (10)</span> </li>
<li className="nav-item1"><a  href="#">Antioxidants</a> <span> (13)</span></li>
<li className="nav-item1"><a  href="#">Multivitamins</a> <span> (15)</span></li>
<li className="nav-item1"><a href="#">Organic Cosmetics</a> <span> (9)</span></li>
<li className="nav-item1"><a href="#">Organic Food</a><span> (5)</span></li>
<li className="nav-item1"><a  href="#">Vitamins &amp; Minerals</a><span> (19)</span> </li>
</ul></aside>
<aside id="aside-top-rated" className="top-rated"><h3 className="widget-title"><span>Top Rated Products</span>
</h3>
<ul className="product-list">
<li>
	<a href="#" title="Daily Detangling Shampoo">
<div className="images1">
	<img  width="75" height="75" src={require('../images/Daily Detangling Shampoo.png')} /></div>
	<ul className="product-widget">
	<li className="nav-item2"><a href="#">Amino Acids</a></li>
<li className="nav-item2"><a href="#">Antioxidants</a></li>
<li className="nav-item2"><a href="#">Multivitamins</a></li>
<div className="product_title_link"><a href="#" title="Daily Detangling Shampoo">
		<span className="product-title">Daily Detangling Shampoo</span>
	</a>
	</div>
	<span className="price">15.00<span className="Price-currencySymbol">$
	</span></span>–<span className="price">21.00<span className="Price-currencySymbol">$</span></span>
	<p>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span></p>
</ul>
</a>
</li>
<li>
	<a href="#" title="Eminence Organic">
	<div className="images2">
	<img width="75" height="75" src={require('../images/Eminence Organic.png')} /></div>
	<ul className="product-widget">
	
	<li className="nav-item2"><a href="#">Amino Acids</a></li>
<li className="nav-item2"><a href="#">Antioxidants</a></li>
	</ul>
	<div className="product_title_link"><a href="#" title="Eminence Organic">
		<span className="product-title">Eminence Organic</span>
	</a>
	</div>
	<span className="price"><ins><span className="Price-amount">40.00
	<span className="Price-currencySymbol">$</span></span></ins> <del><span className="woocommerce-Price-amount amount">
	46.00<span className="Price-currencySymbol">$</span></span></del></span>
<div className="fa-star">
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span></div>	</a>
	</li>


<li>
	<a href="#" title="BEST Vitamin C">
	<div className="images1">
	<img width="75" height="75" src={require('../images/BEST Vitamin C.png')} />
	</div>
	<ul className="product-widget">
	<li className="nav-item2"><a href="#">Amino Acids</a></li>
<li className="nav-item2"><a href="#">Antioxidants</a></li>
<li className="nav-item2"><a href="#">Multivitamins</a></li>
	</ul>
	<div className="product_title_link"><a href="#" title="BEST Vitamin C">
		<span className="product-title">BEST Vitamin C</span>
	</a>
	</div>
	<span className="price"> <ins><span>39.00<span> 
	$</span></span></ins> <del><span>56.00<span >$
	</span></span></del></span>	

	<p>

<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star checked"></span>
<span className="fa fa-star"></span>
<span className="fa fa-star"></span></p>

	</a>
	
</li>

</ul>
</aside>

<aside id="aside-recent-reviews" className="recent-reviews"><h3 className="widget-title"><span>Recent Reviews</span>
</h3>
<ul className="product-list">
<li>

<div className="images3">
	<img  width="75" height="75" src={require('../images/Daily Detangling Shampoo.png')} /></div>
	<em class="reviewer">by <span className="by">admin</span></em>
<div className="product_title_link"><a href="#" title="Daily Detangling Shampoo">
		<span className="product-title">Daily Detangling Shampoo</span></a></div>
	
</li>
<li>

<div className="images3">
	<img  width="75" height="75" src={require('../images/Eminence Organic.png')} /></div>
	<em class="reviewer">by <span className="by">admin</span></em>
<div className="product_title_link"><a href="#" title="Eminence Organic">
		<span className="product-title">Eminence Organic</span></a></div>
	
</li>
<li>

<div className="images3">
	<img  width="75" height="75" src={require('../images/BEST Vitamin C.png')} /></div>
	<em class="reviewer">by <span className="by">admin</span></em>
<div className="product_title_link"><a href="#" title="BEST Vitamin C">
		<span className="product-title">BEST Vitamin C</span></a></div>
	
</li>


</ul>


</aside>

</div>
</div>
</div>

		);
	}
}
export default Shop;