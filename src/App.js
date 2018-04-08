import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import ProductList from './pages/product-list';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route path="/shop/product-list" component={ProductList} />
          <Route path="/about" component={About} />
          <Footer />
        </div>
      </Router>

    );
  }
}
export default App;
