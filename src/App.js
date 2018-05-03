import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contacts from './pages/Contacts';
import Login from './pages/Login';
import ProductList from './pages/product-list';
import ProductDetail from './pages/productDetail';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Blog from './pages/Blog';
import CartPage from './pages/Cart';
import CheckoutPage from './pages/Checkout';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
          <Route exact path={process.env.PUBLIC_URL + '/shop'} component={Shop} />
          <Route exact path={process.env.PUBLIC_URL + '/shop/product_list'} component={ProductList} />
          <Route path={process.env.PUBLIC_URL + '/shop/product_list/:prdDetail'} component={ProductDetail} />
          <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
           <Route path={process.env.PUBLIC_URL + '/contacts'} component={Contacts} />
          <Route path={process.env.PUBLIC_URL + '/blog'} component={Blog} />
          <Route path={process.env.PUBLIC_URL + '/login'} component={Login} />
          <Route path={process.env.PUBLIC_URL + '/cart'} component={CartPage} />
          <Route path={process.env.PUBLIC_URL + '/checkout'} component={CheckoutPage} />
          <Footer />
        </div>
      </Router>

    );
  }
}
export default App;
