import React from 'react';

class Footer extends React.Component{
    render(){
        return(
    <div className="container-fluid page-footer py-md-4">
        <div className="row px-md-5 pb-md-5">
           <a className="mx-auto" href="#"><img src={require('../images/footer-logo.png')} /></a>
        </div>
        <div className="row px-md-5">
            <div className="col-md-3">
                <h4 className="text-white"><span className="font-weight-bold">Categories</span></h4>
                <ul className="nav flex-column mt-md-4">
                  <li className="nav-item">
                    <a className="nav-link pl-md-0" href="#">Amino Acids</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pl-md-0" href="#">Antioxidants</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pl-md-0" href="#">Multivitamins</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pl-md-0" href="#">Organic Cosmetics</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pl-md-0" href="#">Organic Food</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pl-md-0" href="#">Vitamins & Minerals</a>
                  </li>
                </ul>
            </div>
            <div className="col-md-3">
                <h4 className="text-white"><span className="font-weight-bold">Customer</span> Service</h4>
                <ul className="nav flex-column mt-md-4">
                  <li className="nav-item color-2">
                    <a className="nav-link pl-md-0" href="#">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pl-md-0" href="#">Wishlist</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pl-md-0" href="#">Compare</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pl-md-0" href="#">My Account</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pl-md-0" href="#">Checkout</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pl-md-0" href="#">Orders</a>
                  </li>
                </ul>
            </div>
            <div className="col-md-3">
                <h4 className="text-white"><span className="font-weight-bold">Contact</span> Information</h4>
                <ul className="nav flex-column mt-md-4">
                  <li className="nav-item color-alpha">
                    4096 N Highland St, Arlington, VA 32101, USA
                  </li>
                  <li className="nav-item">
                    <a className="nav-link pl-md-0" href="#">organica@demolink.org</a>
                  </li>
                </ul>
            </div>
            <div className="col-md-3">
                <h4 className="text-white"><span className="font-weight-bold">Opening</span> Hours</h4>
                <ul className="nav flex-column mt-md-4">
                  <li className="nav-item color-alpha">
                    Working Days: Mon. - Fri.
                  </li>
                  <li className="nav-item color-alpha">
                    Working Hours: 9.00AM - 5.00PM
                  </li>
                </ul>
            </div>
        </div>
    </div>

        );
    }
}
export default Footer;