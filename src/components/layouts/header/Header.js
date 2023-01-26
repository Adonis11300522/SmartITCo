import { Image } from "react-bootstrap";
import Logo from '../../../assets/img/logo.svg';
import { Link } from "react-router-dom";

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
										<Link to="/" className="nav-link">Home</Link>
									</li>

									<li className="nav-item">
										<Link to="/" className="nav-link">Services<i className="bx bx-chevron-down"></i></Link>

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
										<Link to="/about" className="nav-link">About Us</Link>
									</li>

									<li className="nav-item">
										<Link to="/contact" className="nav-link">Contact Us</Link>
									</li>
								</ul>
								
								<div className="others-option">
																		
									<div className="get-quote">
										<a href="#" className="default-btn">
											<span>Join Us</span>
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