import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row py-md-2 px-md-5 header-top">
                    <div className="col-md-4">
                        <ul className="nav social">
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fab fa-twitter"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fab fa-google-plus-g"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fab fa-pinterest"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <p className="text-center py-2 mb-0 font-weight-bold"><i className="fas fa-phone color-main"></i> 1-555-644-5566</p>
                    </div>
                    <div className="col-md-4">
                        <div className="row justify-content-end">
                        <form className="form-inline my-2 my-lg-0 search">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="row px-md-5 py-md-3">
                    <div className="col-md-3">
                        <a href="#"><img className="img-fluid" src={require('../images/logo.png')} /></a>
                    </div>
                    <div className="col-md-6">
                        <nav className="navbar navbar-expand-lg navbar-light py-4">
                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </button>

                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto ">
                              <li className="nav-item active">
                                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
                              </li>
                              <li className="nav-item dropdown">
                                <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                  Shop
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <a className="dropdown-item" href="#">Action</a>
                                  <a className="dropdown-item" href="#">Another action</a>
                                  <div className="dropdown-divider"></div>
                                  <a className="dropdown-item" href="#">Something else here</a>
                                </div>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Blog</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#">Contacts</a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                    </div>
                    <div className="col-md-3">
                        <div className="row py-md-4 my-md-2 justify-content-md-end">
                        <ul className="nav social">
                            <li className="nav-item">
                                <a className="nav-link shopping-cart" href="#"><i className="fas fa-shopping-cart fa-lg"></i><span className="badge badge-pill bg-main text-white">1</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><i className="fas fa-user fa-lg"></i></a>
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