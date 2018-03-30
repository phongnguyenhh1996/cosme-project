import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>


                      
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="http://via.placeholder.com/350x150" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="http://via.placeholder.com/350x150" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="http://via.placeholder.com/350x150" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
   
<footer className="page-footer ">

    <div className="container"><div class="footer_logo">
        
           <img src={require('./image/organica6_43091.jpg')} />
        
        </div>

    </div>


    <div className="container mt-5 mb-4 text-center text-md-left">
        <div class="row mt-3">

          
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                <h6 class="text-uppercase font-weight-bold">
                    <strong>Categories</strong>
                </h6>
              
                <p>
                    <a href="#!">Amino Acids</a>
                </p>
                <p>
                    <a href="#!">Antioxidants</a>
                </p>
                <p>
                    <a href="#!">Multivitamins</a>
                </p>
                <p>
                    <a href="#!">Organic Cosmetics</a>
                </p>
                 <p>
                    <a href="#!">Organic Food</a>
                </p>
                 
                 <p>
                    <a href="#!">Vitamins & Minerals</a>
                </p>
                    </div>
          
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                    <strong>Infomation</strong>
                </h6>
            
                <p>
                    <a href="#!"> About </a>
                </p>
                <p>
                    <a href="#!"> Wishlist </a>
                </p>
                <p> 
                    <a href="#!"> Compare </a>
                </p>
                <p>
                    <a href="#!"> My Account </a>
                </p>
                <p>
                    <a href="#!"> Checkout </a>
                </p>
                 <p>
                    <a href="#!"> Orders </a>
                </p>
            </div>
           
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase font-weight-bold">
                    <strong>Contact Infomation</strong>
                </h6>
                
                <p>
                  K104/14 Mai Lao Bang, Hai Chau, Da Nang
                </p>
                <p>
                <a href="mailto: organica@demolink.org" >  organica@demolink.org</a>
                   
                </p>
                
            </div>
           
            <div className="col-md-4 col-lg-3 col-xl-3">
                <h6 className="text-uppercase font-weight-bold">
                    <strong>Opening Hours</strong>
                </h6>
                
                <p>
                    Working Days: Mon. - Fri.</p>
                <p>
                    Working Hours: 9.00AM - 5.00PM</p>
                
            </div>
           

        </div>
    </div>
    

</footer>
      </div>

    );
  }
}

export default App;
