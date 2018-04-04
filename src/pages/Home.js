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
					      <div class="carousel-caption d-none d-md-block">
						    <h1>Something</h1>
						    <p>Something</p>
						  </div>
					    </div>
					    <div class="carousel-item">
					      <img class="d-block w-100" src={require('../images/slide-2.jpg')} alt="Second slide" />
					      <div class="carousel-caption d-none d-md-block">
						    <h1>Something</h1>
						    <p>Something</p>
						  </div>
					    </div>
					    <div class="carousel-item">
					      <img class="d-block w-100" src={require('../images/slide-3.jpg')} alt="Third slide" />
					      <div class="carousel-caption d-none d-md-block">
						    <h1>Something</h1>
						    <p>Something</p>
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