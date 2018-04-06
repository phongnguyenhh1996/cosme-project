import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import About from './pages/About'; 
import Blog from './pages/Blog';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Footer />
        </div>
      </Router>

    );
  }
}
export default App;
