import { Image } from "react-bootstrap";
import Logo from '../../../assets/img/logo.svg';

export const Header = () => {
    return (
        <header className="header-area">
			<div className="navbar-area">
				<div className="mobile-nav">
					<div className="container">
						<a href="index-2.html" className="logo">
							<Image src={Logo} alt="Logo"/>
						</a>
					</div>
				</div>

				<div className="main-nav">
					<div className="container">
						<nav className="navbar navbar-expand-md">
							<a className="navbar-brand" href="index-2.html">
								<Image src={Logo} alt="Logo"/>
							</a>
							
							<div className="collapse navbar-collapse mean-menu">
								<ul className="navbar-nav m-auto">
									<li className="nav-item">
										<a href="#" className="nav-link active">
											Home
											<i className="bx bx-chevron-down"></i>
										</a>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<a href="index.html" className="nav-link">Home One</a>
											</li>
											<li className="nav-item">
												<a href="index-2.html" className="nav-link active">Home Two</a>
											</li>
											<li className="nav-item">
												<a href="index-3.html" className="nav-link">Home Three</a>
											</li>
											<li className="nav-item">
												<a href="index-4.html" className="nav-link">Home Four</a>
											</li>
											<li className="nav-item">
												<a href="index-5.html" className="nav-link">Home Five</a>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<a href="#" className="nav-link">
											Pages
											<i className="bx bx-chevron-down"></i>
										</a>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<a href="about.html" className="nav-link">About Us</a>
											</li>

											<li className="nav-item">
												<a href="#" className="nav-link">
													Services
													<i className="bx bx-chevron-right"></i>
												</a>
		
												<ul className="dropdown-menu">
													<li className="nav-item">
														<a href="services-style-one.html" className="nav-link">Services Style One</a>
													</li>
													<li className="nav-item">
														<a href="services-style-two.html" className="nav-link">Services Style Two</a>
													</li>
													<li className="nav-item">
														<a href="services-style-three.html" className="nav-link">Services Style Three</a>
													</li>
													<li className="nav-item">
														<a href="services-details.html" className="nav-link">Service Details</a>
													</li>
												</ul>
											</li>

											<li className="nav-item">
												<a href="team.html" className="nav-link">Team</a>
											</li>

											<li className="nav-item">
												<a href="testimonials.html" className="nav-link">Testimonials</a>
											</li>
											
											<li className="nav-item">
												<a href="pricing.html" className="nav-link">Pricing</a>
											</li>

											<li className="nav-item">
												<a href="#" className="nav-link">
													User
													<i className="bx bx-chevron-right"></i>
												</a>

												<ul className="dropdown-menu">
													<li className="nav-item">
														<a href="my-account.html" className="nav-link">My Account</a>
													</li>
													<li className="nav-item">
														<a href="log-in.html" className="nav-link">Log In</a>
													</li>
													<li className="nav-item">
														<a href="registration.html" className="nav-link">Registration</a>
													</li>
													<li className="nav-item">
														<a href="recover-password.html" className="nav-link">Recover Password</a>
													</li>
												</ul>
											</li>

											<li className="nav-item">
												<a href="faq.html" className="nav-link">FAQ</a>
											</li>
											<li className="nav-item">
												<a href="privacy-policy.html" className="nav-link">Privacy Policy</a>
											</li>
											<li className="nav-item">
												<a href="terms-conditions.html" className="nav-link">Terms & Conditions</a>
											</li>
											<li className="nav-item">
												<a href="coming-soon.html" className="nav-link">Coming Soon</a>
											</li>
											<li className="nav-item">
												<a href="404.html" className="nav-link">404 Error Page</a>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<a href="#" className="nav-link">
											Solutions
											<i className="bx bx-chevron-down"></i>
										</a>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<a href="solutions.html" className="nav-link">Solutions</a>
											</li>
											<li className="nav-item">
												<a href="solution-details.html" className="nav-link">Solution Details</a>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<a href="#" className="nav-link">
											Shop
											<i className="bx bx-chevron-down"></i>
										</a>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<a href="products.html" className="nav-link">Products</a>
											</li>
											<li className="nav-item">
												<a href="shopping-cart.html" className="nav-link">Shopping Cart</a>
											</li>
											<li className="nav-item">
												<a href="checkout.html" className="nav-link">Checkout</a>
											</li>
											<li className="nav-item">
												<a href="single-product.html" className="nav-link">Single Product</a>
											</li>
											<li className="nav-item">
												<a href="wishlist.html" className="nav-link">Wishlist</a>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<a href="#" className="nav-link">
											Blog
											<i className="bx bx-chevron-down"></i>
										</a>

										<ul className="dropdown-menu">
											<li className="nav-item">
												<a href="blog-column-one.html" className="nav-link">Blog Column One</a>
											</li>
											<li className="nav-item">
												<a href="blog-column-two.html" className="nav-link">Blog Column Two</a>
											</li>
											<li className="nav-item">
												<a href="blog-column-three.html" className="nav-link">Blog Column Three</a>
											</li>
											<li className="nav-item">
												<a href="blog-left-sidebar.html" className="nav-link">Blog Left Sidebar</a>
											</li>
											<li className="nav-item">
												<a href="blog-details.html" className="nav-link">Blog Details</a>
											</li>
										</ul>
									</li>

									<li className="nav-item">
										<a href="contact.html" className="nav-link">Contact</a>
									</li>
								</ul>
								
								<div className="others-option">
									<div className="cart-icon">
										<a href="shopping-cart.html">
											<i className="bx bx-cart"></i>
											<span>0</span>
										</a>
									</div>

									<div className="get-quote">
										<a href="#" className="default-btn">
											<span>Get a Quote</span>
										</a>
									</div>
								</div>
							</div>
						</nav>
					</div>
				</div>
				
				<div className="others-option-for-responsive">
					<div className="container">
						<div className="dot-menu">
							<div className="inner">
								<div className="circle circle-one"></div>
								<div className="circle circle-two"></div>
								<div className="circle circle-three"></div>
							</div>
						</div>
						
						<div className="container">
							<div className="option-inner">
								<div className="others-option justify-content-center d-flex align-items-center">
									<div className="get-quote">
										<a href="#" className="default-btn">
											<span>Get a Quote</span>
										</a>
									</div>

									<div className="cart-icon">
										<a href="shopping-cart.html">
											<i className="bx bx-cart"></i>
											<span>0</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
    )
}