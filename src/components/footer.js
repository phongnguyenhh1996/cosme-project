import React from 'react';

class Footer extends React.Component{
    render(){
        return(
    <div className="container-fluid page-footer py-4">
        <div className="row px-md-5">
           <img className="mx-auto" src={require('../image/logo.png')} />
        </div>
        <div className="row px-md-5">
            <div className="col-md-3">
                <h3 className="text-white"><span className="font-weight-bold">Categories</span></h3>
                <ul class="nav flex-column mt-md-4">
                  <li class="nav-item">
                    <a class="nav-link pl-md-0" href="#">Amino Acids</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pl-md-0" href="#">Antioxidants</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pl-md-0" href="#">Multivitamins</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pl-md-0" href="#">Organic Cosmetics</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pl-md-0" href="#">Organic Food</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pl-md-0" href="#">Vitamins & Minerals</a>
                  </li>
                </ul>
            </div>
            <div className="col-md-3">
                <h3 className="text-white"><span className="font-weight-bold">Customer</span> Service</h3>
                <ul class="nav flex-column mt-md-4">
                  <li class="nav-item color-2">
                    <a class="nav-link pl-md-0" href="#">About</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pl-md-0" href="#">Wishlist</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pl-md-0" href="#">Compare</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pl-md-0" href="#">My Account</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pl-md-0" href="#">Checkout</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pl-md-0" href="#">Orders</a>
                  </li>
                </ul>
            </div>
            <div className="col-md-3">
                <h3 className="text-white"><span className="font-weight-bold">Contact</span> Information</h3>
                <ul class="nav flex-column mt-md-4">
                  <li class="nav-item color-alpha">
                    4096 N Highland St, Arlington, VA 32101, USA
                  </li>
                  <li class="nav-item">
                    <a class="nav-link pl-md-0" href="#">organica@demolink.org</a>
                  </li>
                </ul>
            </div>
            <div className="col-md-3">
                <h3 className="text-white"><span className="font-weight-bold">Opening</span> Hours</h3>
                <ul class="nav flex-column mt-md-4">
                  <li class="nav-item color-alpha">
                    Working Days: Mon. - Fri.
                  </li>
                  <li class="nav-item color-alpha">
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