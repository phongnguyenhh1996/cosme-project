import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row py-md-2 px-md-5 header-top">
                    <div className="col-md-4">
                        <ul class="nav social">
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fab fa-facebook-f"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fab fa-google-plus-g"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fab fa-linkedin-in"></i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fab fa-pinterest"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <p className="text-center py-2 mb-0 font-weight-bold"><i class="fas fa-phone color-main"></i> 1-555-644-5566</p>
                    </div>
                    <div className="col-md-4">
                        <div className="row justify-content-end">
                        <form class="form-inline my-2 my-lg-0 search">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><i class="fas fa-search"></i></button>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="row px-md-5 py-md-3">
                    <div className="col-md-3">
                        <a href="#"><img className="img-fluid" src={require('../images/logo.png')} /></a>
                    </div>
                    <div className="col-md-6">
                        <nav class="navbar navbar-expand-lg navbar-light py-4">
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>

                          <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto ">
                              <li class="nav-item active">
                                <Link class="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
                              </li>
                              <li class="nav-item dropdown">
                                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Shop
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a class="dropdown-item" href="#">Action</a>
                                  <a class="dropdown-item" href="#">Another action</a>
                                  <div class="dropdown-divider"></div>
                                  <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                              </li>
                              <li class="nav-item">
                                <Link class="nav-link" to="/about">About</Link>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#">Contacts</a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                    </div>
                    <div className="col-md-3">
                        <div className="row py-md-4 my-md-2 justify-content-end">
                        <ul class="nav social">
                            <li class="nav-item">
                                <a class="nav-link shopping-cart" href="#"><i class="fas fa-shopping-cart fa-lg"></i><span className="badge badge-pill bg-main text-white">1</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fas fa-user fa-lg"></i></a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Header;