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
										<Link to="/service" className="nav-link">Services</Link>
									</li>

									<li className="nav-item">
										<Link to="/team" className="nav-link">Team</Link>
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