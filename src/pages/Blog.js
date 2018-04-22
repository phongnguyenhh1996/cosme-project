import React, { Component } from 'react';
import { BrowserRouter as Router, IndexRoute, Route, Link } from "react-router-dom";
import ScrollToTop from '../components/scrollOnTop';

class Blog extends React.Component{
	render(){

        return(
			<div className="container-fluid blog">
			<ScrollToTop />
				<div className="row px-md-5 py-md-3">
					<nav aria-label="breadcrumb ">
					  <ol className="breadcrumb bg-white">
					    <li className="breadcrumb-item"> <Link to="/">Home</Link></li>
					    <li className="breadcrumb-item active" aria-current="page">Blog</li>
					  </ol>
					</nav>
					<div className="w-100 border-bottom-dashed mx-md-3">
					</div>
				</div>
				<div className="row px-md-5 py-md-4">
					<div className=" col-xs-12 col-md-9 col-xl-9 pr-md-5">
						<div className="title pd-md-5">
							<h1>
								<a href="#"> What Are Superfoods?
								</a>
							</h1>
						</div>
					
						<div className="publish pb-md-5" >
							Published on 
							<a href="#" className="px-md-2">Oct 12, 2016</a>
							<span className="dot px-md-2"></span> by
							<a href="#" className="px-md-2">Admin</a>
							<span className="dot px-md-2"></span>
							<a href="#" className="px-md-1"> 1 comments</a>
						</div>
						<a href="#">
						<img className="img-fluid pt-md-3 pb-md-3" src={require('../images/Blog 1.jpg')} />	
						</a>
						<p> Superfoods are foods — mostly plant-based but also some fish and dairy — thought to be nutritionally
						 dense and thus good for one’s health. Blueberries, salmon, 
						kale and acai are just a few examples of foods that have garnered the “superfood” label.
						 However, there are…
						 </p>
						<div className="publish" >
							Categories:
							<a href="#" className="px-md-2">Organic Brands,</a>
							
							<a href="#" className="px-md-2">Organic Skincare</a>
						
						</div>
						<div className="publish" >
						<span className="dot px-md-2"></span>
						 Tag:
							<a href="#" className="px-md-2">cometic, </a>
							<a href="#" classList="px-md-2">food, </a>
							<a href="#" className="px-md-2">health,</a>
							<a href="#" className="px-md-2">organic,</a>
							<a href="#" className="px-md-2">vitamins</a>
						 </div>
					
						<div className="row pt-md-5 pb-md-5  justify-content-between">
							<ul className="nav social1 ">
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
	                        
	                        <button type="submit" className="btn btn-primary button1 ">READ MORE</button>
	                   
	                    </div>
		
						<div className="title1 pd-md-5">

							<h1 className="pt-md-5">
								<a href="#">Supplement Facts</a>
							</h1>
						</div>
						<div className="publish pb-md-5">
								
							<a href="#" className="px-md-2">Oct 11, 2016</a>
							<span className="dot px-md-2"></span>by 
							<a href="#" className="px-md-2">Admin</a>
							<span className="dot px-md-2"></span>
							<a href="#" className="px-md-2"> 4 comments</a>
								
						</div>
						<a href="#">
						<img className="img-fluid pt-md-3 pb-md-3" src={require('../images/Blog 2.jpg')} />	
						</a>
						<p> A study published in 2013 in the journal Circulation found that a high intake of 
						phytochemicals known as flavonoids — which are found in blueberries, 
						as well as other kinds of berries — may reduce the risk of certain heart conditions in young women.
						However, there…</p>
						<div className="publish pb-md-5">
							Categories:   
							<a href="#" className="px-md-2">Organic Brands,</a>
							<a href="#" className="px-md-2">Organic Skincare </a>
							<span className="dot px-md-2"></span>
							Tag:   
							<a href="#" className="px-md-2">cometic, </a>
							<a href="#" className="px-md-2">organic </a>
							
						</div>
						<div className="row pt-md-5 pb-md-5 justify-content-between">
							<ul className="nav social1 ">
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
		                        <a className="nav-link" href="#"><i className="fab fa-pinterest"></i></a>                            </li>
	                        </ul>
	                        
	                        <button className="btn btn-primary button1 ">READ MORE</button>
	                   
	                   	</div>
					<div className="title1 pd-md-5">
						<h1 className="pt-md-5">
							<a href="#">Video Format
							</a>
						</h1>
					</div>
					<div className="publish pd-md-5">
					
						Published on  
						<a href="#" className="px-md-2">Sep 27, 2016 </a>
						by 
						<a href="#" className="px-md-2">Admin</a>
						<a href="#" className="px-md-2"> 0 comments</a>
					</div>
					<div>
						<a href="#">
							<video width="500" controls>
 					 			<source src="https://www.youtube.com/watch?v=rpLITtLRltw" type="video/mp4"/>
 							 Your browser does not support HTML5 video.
							</video>
						</a>
					</div>				
					
					<p> Blueberries often top many lists of superfoods because they are rich in vitamins,
					 soluble fiber and phytochemicals. But the same nutrients found in blueberries are also 
					 found in many other kinds of berries, including strawberries and cranberries.
					 A study published in 2013 in the journal…</p>
					<div className="publish pb-md-5">
						Categories:
						<a href="#" className="px-md-2">Organic Brands</a>
						<span className="dot px-md-2"> </span>
						Tag:  
						<a href="#" className="px-md-2">cometic,</a>
						<a href="#" className="px-md-2">organic</a>
					</div>
					<div className="row pt-md-5 pb-md-5 justify-content-between">
						<ul className="nav social1 ">
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
	                        <a className="nav-link" href="#"><i className="fab fa-pinterest"></i></a>                            </li>
                        </ul>
                        
                        <button type="submit" className="btn btn-primary button1 ">READ MORE</button>                
					</div>
					<div className="title1 pd-md-5">

						<h1 className="pt-md-5">
							<a href="#">Quote Format
							</a>
						</h1>
					</div>
					<div className="publish  pb-md-5" >
			
						Published on   
						<a href="#" className="px-md-2">Sep 27, 2016</a>
						<span className="dot px-md-2"></span>
						by 
						<a href="#" className="px-md-2">Admin </a>
						<span className="dot px-md-2"></span>
						<a href="#" className="px-md-2"> 0 comments</a>
					</div>
					<div className="quote px-md-5 pt-md-5 pb-md-5" >
					
						<i className="fas fa-quote-left fa-3x color-main2 "></i>
						<p className="px-md-5">Supplying my whole family with different kinds of probiotics
						 and vitamins was an easy deal thanks to this store! 
						They have an astonishing selection of both food supplements and some healthy additives.</p>
						
						<p className="color-main2 px-md-5">- Mary Willis</p>
					</div>
					<p className="pt-md-5"> Whole grains — named such because, unlike refined grains, 
					they are not stripped of their nutrient-containing bran and germ during
					 processing — have similar benefits to beans, though they don’t contain as much protein.
					 Quinoa is not a grain, but it cooks up like one,…</p>
					 
					 <div className="publish pd-md-5">
						Categories:  
						<a href="#" className="px-md-2">Organic Brands</a>
						<span className="dot px-md-2"></span>
						Tag:
						<a href="#" className="px-md-2">cometic,</a>
						<a href="#" className="px-md-2">organic</a>
					</div>
					<div className="row pt-md-5 pb-md-5 justify-content-between">
						<ul className="nav social1 ">
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
	                        <a className="nav-link" href="#"><i className="fab fa-pinterest"></i></a>                            </li>
                        </ul>
                        
                        <button type="submit" className="btn btn-primary button1 ">READ MORE</button>                
					</div>
					<div className="title1 pd-md-5">

						<h1 className="pt-md-5">
						<a href="#">Image Format</a>
						</h1>
					</div>
					<div className="publish pb-md-5" >
					
						Published on 
						<a href="#" className="px-md-2">Sep 27, 2016</a>
						<span className="dot px-md-2"></span>
						by
						<a href="#" className="px-md-2">Admin</a>
						<span className="dot px-md-2"></span>
				
						<a href="#" className="px-md-2"> 1 comments</a>
					</div>
					<a   href="#">
						<img className="img-fluid" src={require('../images/Blog 4.jpg')} />
		
					</a>
					<p className="pt-md-5">A study published in 2013 in the journal Circulation found that a high intake
					 of phytochemicals known as flavonoids — which are found in blueberries, as well as other kinds of berries
					  — may reduce the risk of certain heart conditions in young women.
					However, there…
					</p>
					<div className="publish pb-md-5">
	
						Categories:  
						<a href="#" cla=" px-md-2">Organic Brands</a>
						<span className="dot px-md-2"></span>
						Tag:  
						<a href="#" className="px-md-2">cometic</a>
						<a href="#" className="px-md-2">organic </a>
					</div>
					<div className="row pt-md-5 pb-md-5 justify-content-between">
						<ul className="nav social1 ">
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
	                        <a className="nav-link" href="#"><i className="fab fa-pinterest"></i></a>                            </li>
                        </ul>
                        
                        <button type="submit" className="btn btn-primary button1 ">READ MORE</button>                
					</div>
				
					<div className="title1 pd-md-5">

						<h1 className="pt-md-5">
							<a href="#">Gallery Format</a>
						</h1>
					</div>
					<div className="publish pb-md-5" >
						Published on 
						<a href="#" className="px-md-2">Sep 27, 2016</a>
						<span className="dot px-md-2"></span> by
						<a href="#" className="px-md-2">Admin</a>
						<span className="dot px-md-2"></span>
						<a href="#" className="px-md-1"> 2 comments</a>
					</div>
					<div className="row slide-main slide-2">
						<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">
						  <div className="carousel-inner">
						    <div className="carousel-item active">
							    <a href="#">
							      <img className="d-block w-100" src={require('../images/About making.jpg')} alt="First slide" />
							    
							    </a>
						    </div>
						    <div className="carousel-item">
							    <a href="#">
							      <img className="d-block w-100" src={require('../images/Blog 1.jpg')} alt="Second slide" />
							    </a>
						    </div>
						    <div className="carousel-item">
							    <a href="#">
							      <img className="d-block w-100" src={require('../images/Blog 4.jpg')} alt="Third slide" />
							     </a>
						    </div>
						  </div>
						  <button className="btn gallery-search mx-auto rounded-circle" type="submit"><i className="fas fa-search"></i></button>
						  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
						    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
						    <span className="sr-only">Previous</span>
						  </a>
						  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
						    <span className="carousel-control-next-icon" aria-hidden="true"></span>
						    <span className="sr-only">Next</span>
						  </a>
						</div>
					</div>
					<p className="pt-md-5">Nuts and seeds contain high levels of minerals and healthy fats. 
					Although these are common additions on superfood lists, the downside is that they are high in calories. 
					Portion control is key.Shelled nuts and seeds, in this regard, are ideal because they take time…
					</p>
					<div className="publish pb-md-5">
				
						Categories:  
						<a href="#" className="px-md-2">Organic Brands</a>
						<span className="dot px-md-2"></span>
						Tag:  
						<a href="#" className="px-md-2">health,</a>
						<a href="#" className="px-md-2">organic</a>
					</div>
					<div className="row pt-md-5 pb-md-5 justify-content-between">
						<ul className="nav social1 ">
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
	                        <a className="nav-link" href="#"><i className="fab fa-pinterest"></i></a>                            </li>
                        </ul>
                        
                        <button type="submit" className="btn btn-primary button1 ">READ MORE</button>                
					</div>
										
					<div className="title1 pd-md-5">
					</div>
					<div className="publish pt-md-5 pb-md-5" >
						Published on  
						<a href="#" className="px-md-2">Sep 27, 2016</a>
						<span className="dot px-md-2"></span>
						by
						<a href="#" className="px-md-2">Admin</a>
						<span className="dot px-md-2"></span>
						<a href="#"> 1 comments</a>
					</div>
					
					<a   href="#">
						<img className="img-fluid" src={require('../images/Blog 5.jpg')} />
		
					</a>
					<p className="pt-md-5">Kiwifruit also tops many a list of popular superfoods. Its benefits are similar, 
					for the most part, to berries, melons, citrus fruit, apples and pears, 
						all of which are high in vitamin C and rich in antioxidants.
					 Kiwifruit is labeled a superfood perhaps because it…
					</p>
					<div className="publish pb-md-5">
						Categories:  
						<a href="#" className="px-md-2">Organic Skincare </a>
						<span className="dot px-md-2"></span>
						Tag: 
						<a href="#" className="px-md-2">cometic,</a>
						<a href="#" className="px-md-2">food</a>
					</div>
					<div className="row pt-md-5 pb-md-5 justify-content-between">
						<ul className="nav social1 ">
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
	                        <a className="nav-link" href="#"><i className="fab fa-pinterest"></i></a>                            </li>
                        </ul>
                        
                        <button type="submit" className="btn btn-primary button1 ">READ MORE</button>                
					</div>
						
					<div className="title1 pd-md-5 pt-md-5">
						<nav aria-label="...">
						  <ul className="pagination">
						    <li className="page-item disabled">
						    	<a class="page-link" href="#" aria-label="Previous">
							        <span aria-hidden="true"> ❮ </span>
							        <span class="sr-only">Previous</span>
							    </a>
						    </li>
						    <li className="page-item active"><a className="page-link" href="#">1</a></li>
						    <li className="page-item ">
						      <a className="page-link" href="#">2 </a>
						    </li>
						    <li className="page-item">

						      <a class="page-link" href="#" aria-label="Next">
						        <span aria-hidden="true"> ❯ </span>
						        <span class="sr-only">Next</span>
						      </a>
						    </li>
						  </ul>
						</nav>							
					</div>


				</div>

				<div className="col-md-3">
					<div className="row">
						<div className="making-your col-md-12">
							<h2 className="pt-md-4">Making your diet healthier since 1992…</h2>
							<p> Organica is an old player when it comes to everything health-inducing and organic-enhanced!
							 For years we've been selling quality organic food, vitamins, bio-additives,
							 nutritional supplements and other healthy products both in the U.S., as well as internationally.</p>
						</div>
						<div className="making-your col-md-12">
							<h2 className="pt-md-4">Search</h2>
							<div class="input-group input-group-sm pb-md-5 pt-md-3">
							    <input type="text" class="form-control" placeholder="Search"/>
							    <div class="input-group-btn">
							       <button class="btn btn-primary button1" type="submit">Search</button>
							    </div>
							</div>
						</div>
							<div className="subscribe-follow ">
								<div className="subscribe px-md-2">
									<h2 className="pt-md-5">Subscribe</h2>
									<p>Trust us, you'll want to hear what we have to say</p>
									<div className="form-group">
										<input type="text" className="form-control" placeholder=" Enter Your Email"/>
									</div>
									<div className="form-group">
							 			<button type="submit" className="btn btn-primary btn-lm btn-block">SUBSCRIBE</button>
							 		</div>
								</div>
								<div className="follow pt-md-3">
		 							<h2 className="pt-md-5">Follow</h2>
									<p className="pt-md-3 ">
								Read our latest news on any of these social networks!
									</p>
									<div className=" pt-md-2 pb-md-5">
										<ul className="nav social1 mx-auto justify-content-md-center">
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
				                                <a className="nav-link" href="#"><i className="fab fa-pinterest"></i></a>                            </li>
			                        	</ul>
									</div>
								</div>
							</div>
						    <div className="making-your col-md-12 pt-md-5">
								<h2 className="pt-md-4">Recent Posts</h2>
								<div className="recent-posts px-md-2 pt-md-3">
										Posted by 
										<a href="#" className="px-md-2">Admin</a>
									<h5>
										<a href="#">What Are Superfoods? </a>
									</h5>
									Oct 12, 2016
								</div>
								<div className="recent-posts px-md-2 pt-md-3">
										Posted by 
										<a href="#" className="px-md-2">Admin</a>
									<h5>
										<a href="#">Supplement Facts
										</a>
									</h5>
									Oct 11, 2016
								</div>
								<div className="recent-posts px-md-2 pt-md-3">
										Posted by 
										<a href="#" className="px-md-2">Admin</a>
									<h5>
										<a href="#">Audio Format
										</a>
									</h5>
									Sep 27, 2016
								</div>
								<div className="recent-posts px-md-2 pt-md-3">
										Posted by 
										<a href="#" className="px-md-2">Admin</a>
									<h5>
										<a href="#">Video Format
										</a>
									</h5>
									Sep 27, 2016
								</div>
							</div>
					
							<div className="col-md-12 browse aside pt-md-5 ">
								<h4 className="font-weight-bold w-100 pt-md-5 pb-md-2">Product Categories</h4>
								<ul className="nav flex-column pt-md-4">
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Amino Acids </a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Antioxidants </a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Multivitamins</a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Organic Cosmetics</a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Organic Food </a>
				                  </li>
				                  <li className="nav-item">
				                    <a className="nav-link px-md-0" href="#">Vitamins & Minerals</a>
				                  </li>
				                </ul>
							</div>
						</div>
					</div>
				</div>
			
			</div>
		);
	}
}
export default Blog;