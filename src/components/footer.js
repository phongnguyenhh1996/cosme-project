import React from 'react';

class Footer extends React.Component{
    render(){
        return(
            <footer className="page-footer ">

    <div className="container"><div className="footer_logo">
        
           <img src={require('../image/organica6_43091.jpg')} />
        
        </div>

    </div>


    <div className="container mt-5 mb-4 text-center text-md-left">
        <div className="row mt-3">

          
            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">
                <h6 className="text-uppercase font-weight-bold">
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
        );
    }
}
export default Footer;