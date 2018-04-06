import React, { Component } from 'react';

class Shop extends React.Component{
	render(){
		return(
	<div class="row products">
	<div id="primary" class="col-xs-12 col-md-8 col-xl-9">


		<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
		<a href="https://ld-wp.template-help.com/wordpress_60093/product-category/amino-acids/">
		<img src={require('../images/Amino Acids.jpg')} />	
		<h3>
		Amino Acids <mark class="count"><span class="count__number">19</span>  products</mark>	</h3>
	</a>	</div>
	<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 ">
		<a href="https://ld-wp.template-help.com/wordpress_60093/product-category/antioxidants/">
		<img src={require('../images/Antioxidants.jpg')} />
		<h3>
		Antioxidants <mark class="count"><span class="count__number">17</span>  products</mark>	</h3>
	</a>	</div>
	<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
		<a href="https://ld-wp.template-help.com/wordpress_60093/product-category/multivitamins/">
		<img src={require('../images/Multivitamins.jpg')} />
		<h3>
		Multivitamins <mark class="count"><span class="count__number">12</span>  products</mark>	</h3>
	</a>	</div>
	<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 product-category product">
		<a href="https://ld-wp.template-help.com/wordpress_60093/product-category/organic-cosmetics/">
		<img src={require('../images/Organic Cosmetics.jpg')} />
		<h3>
		Organic Cosmetics <mark class="count"><span class="count__number">7</span>  products</mark>	</h3>
	</a>	</div>
	<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 product-category product first">
		<a href="https://ld-wp.template-help.com/wordpress_60093/product-category/organic-food/">
		<img src={require('../images/Organic Food.jpg')} />
			<h3>
		Organic Food <mark class="count"><span class="count__number">7</span>  products</mark>	</h3>
	</a>	</div>
	<div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 product-category product last">
		<a href="https://ld-wp.template-help.com/wordpress_60093/product-category/vitamins-minerals/">
			<img src={require('../images/Vitamins & Minerals.jpg')} />
		<h3>
		Vitamins &amp; Minerals <mark class="count"><span class="count__number">6</span>  products</mark>	</h3>
	</a>	
	</div>

</div>

<div id="sidebar" class="col-xs-12 col-md-4 col-xl-3 sidebar widget-area" role="complementary">
<aside id="woocommerce_product_categories-6" class="widget woocommerce widget_product_categories"><h3 class="widget-title"><span>Browse</span></h3><ul class="product-categories"><li class="cat-item cat-item-92"><a href="https://ld-wp.template-help.com/wordpress_60093/product-category/amino-acids/">Amino Acids</a> <span class="count">(19)</span></li>
<li class="cat-item cat-item-91"><a href="https://ld-wp.template-help.com/wordpress_60093/product-category/antioxidants/">Antioxidants</a> <span class="count">(17)</span></li>
<li class="cat-item cat-item-93"><a href="https://ld-wp.template-help.com/wordpress_60093/product-category/multivitamins/">Multivitamins</a> <span class="count">(12)</span></li>
<li class="cat-item cat-item-89"><a href="https://ld-wp.template-help.com/wordpress_60093/product-category/organic-cosmetics/">Organic Cosmetics</a> <span class="count">(7)</span></li>
<li class="cat-item cat-item-94"><a href="https://ld-wp.template-help.com/wordpress_60093/product-category/organic-food/">Organic Food</a> <span class="count">(7)</span></li>
<li class="cat-item cat-item-90"><a href="https://ld-wp.template-help.com/wordpress_60093/product-category/vitamins-minerals/">Vitamins &amp; Minerals</a> <span class="count">(6)</span></li>
</ul></aside>
</div>
</div>

			
		);
	}
}
export default Shop;