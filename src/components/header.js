import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Cart from './cartItem';
import { findDOMNode } from 'react-dom';
import $ from "jquery";

class Header extends React.Component{
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll.bind(this));
    }
    handleScroll(event) {
        const el = findDOMNode(this.refs.fixedTop);
        $(el).css("transition","background-color .3s ease, box-shadow .3s ease, transform .3s ease, flex-basis .3s ease, max-width 0s")
        if (window.scrollY === 0) {
            if ($(el).hasClass("fixed-navbar")){$(el).removeClass("col-lg-12 fixed-navbar d-flex justify-content-center").addClass("col-lg-9");}
        }
        else if (window.scrollY !== 0) {
            if ($(el).hasClass("col-lg-9")){$(el).removeClass("col-lg-9").addClass("col-lg-12 fixed-navbar d-flex justify-content-center");}
        }
    }
    render(){
        return(
            <header className="container-fluid">
                <div className="row py-lg-2 px-lg-5 header-top d-none d-lg-flex">
                    <div className="col-sm-4">
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
                    <div className="col-sm-4">
                        <p className="text-center py-2 mb-0 font-weight-bold"><i className="fas fa-phone color-main"></i> 1-555-644-5566</p>
                    </div>
                    <div className="col-sm-4">
                        <div className="row justify-content-lg-end justify-content-center">
                        <form className="form-inline my-2 my-lg-0 search">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                        </form>
                        </div>
                    </div>
                </div>
                <div className="row px-lg-5 py-lg-3">
                    <div className="col-12 col-lg-3 order-3 order-sm-1 d-flex justify-content-center align-items-lg-center py-3 py-lg-0">
                        <Link className="text-center w-100" to="/"><img className="img-fluid mx-auto" src={require('../images/logo.png')} /></Link>
                    </div>
                    <div ref="fixedTop" className="col-lg-9 order-1 order-lg-3">
                    <div className="row">
                         <div className="col-6 col-sm-9">
                        <nav className="navbar navbar-expand-md navbar-light">
                          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </button>

                          <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto ">
                              <li className="nav-item active py-lg-4">
                                <Link className="nav-link pl-sm-0" to="/">Home<span className="sr-only">(current)</span></Link>
                              </li>
                              <li className="nav-item dropdown py-lg-4">
                                <Link className="nav-link" to="/shop" id="navbarDropdown">
                                  Shop
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                  <Link className="dropdown-item" to="/shop/product_list">Amino Acids</Link>
                                  <Link className="dropdown-item" to="/shop/product_list">Antioxidants</Link>
                                  <Link className="dropdown-item" to="/shop/product_list">Multivitamins</Link>
                                  <Link className="dropdown-item" to="/shop/product_list">Organic Cosmetics</Link>
                                  <Link className="dropdown-item" to="/shop/product_list">Organic Food</Link>
                                  <Link className="dropdown-item" to="/shop/product_list">Vitamins & Minerals</Link>
                                </div>
                              </li>
                              <li className="nav-item py-lg-4">
                                <Link className="nav-link" to="/about">About</Link>
                              </li>
                              <li className="nav-item py-lg-4">
                                <Link className="nav-link" to="/blog">Blog</Link>
                              </li>
                              <li className="nav-item py-lg-4">
                               <Link className="nav-link" to="/contacts">  Contacts</Link>
                              </li>
                            </ul>
                          </div>
                        </nav>
                    </div>
                    <div className="col-6 col-sm-3 d-flex justify-content-end pr-lg-0">
                        <ul className="nav social py-lg-4 py-2 align-self-center">
                            <Cart />
                            <li className="nav-item">
                            <Link className="nav-link" to="/login">
                               <i className="fas fa-user fa-lg"></i> 
                                </Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;