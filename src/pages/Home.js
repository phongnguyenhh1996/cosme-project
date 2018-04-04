import React, { Component } from 'react';

class Home extends React.Component{
	render(){
		return(
			<div className="container-fluid">
				<div className="row slide-main">
					<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
					  <div class="carousel-inner">
					    <div class="carousel-item active">
					      <img class="d-block w-100" src={require('../images/slide-1.jpg')} alt="First slide" />
					      <div class="carousel-caption d-none d-md-block pt-md-5 mt-md-5">
						    <h1 className="hand-writing color-main2 pt-md-5">Find the</h1>
						    <h1 className="sans-serif-font text-dark font-weight-bold"><span className="font-bigger">Healthiest</span><br/>Organic Cosmetic Products</h1>
						    <button className="btn btn-outline-dark font-weight-bold mt-md-4">SHOP NOW</button>
						  </div>
					    </div>
					    <div class="carousel-item">
					      <img class="d-block w-100" src={require('../images/slide-2.jpg')} alt="Second slide" />
					      <div class="carousel-caption d-none d-md-block pt-md-5 mt-md-5">
						    <h1 className="hand-writing text-white pt-md-5">Super Sale</h1>
						    <h1 className="sans-serif-font text-dark font-weight-bold">SAVE up to <span className="text-white">50%</span> on<br/><span className="color-main2">ORGANIC</span> Aloe Vera Juice</h1>
						    <button className="btn btn-outline-dark font-weight-bold mt-md-4">SHOP NOW</button>
						  </div>
					    </div>
					    <div class="carousel-item">
					      <img class="d-block w-100" src={require('../images/slide-3.jpg')} alt="Third slide" />
					      <div class="carousel-caption d-none d-md-block pt-md-5 mt-md-5">
						    <h1 className="hand-writing color-main2 pt-md-5">The Best</h1>
						    <h1 className="sans-serif-font text-white font-weight-bold">Food Supplements<br/>for Health & Beauty</h1>
						    <button className="btn btn-outline-dark font-weight-bold mt-md-4">SHOP NOW</button>
						  </div>
					    </div>
					  </div>
					  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
					    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
					    <span class="sr-only">Previous</span>
					  </a>
					  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
					    <span class="carousel-control-next-icon" aria-hidden="true"></span>
					    <span class="sr-only">Next</span>
					  </a>
					</div>
				</div>
			</div>
		);
	}
}
export default Home;