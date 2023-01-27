import { Image } from "react-bootstrap";
import Logo from '../../../assets/img/logo.svg';

export const Footer = () => {
    return (
        <div className="Footer">
            <footer className="footer-area pt-100 pb-70 jarallax" data-jarallax='{"speed": 0.3}'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <a href="index.html" className="logo">
                                    <Image src={Logo} alt="Image"/>
                                </a>

                                <p>We provide you with the talent and capabilities to outsource your software development. Whether a single developer or a complex multi-team solution, we are always timezone aligned and highly responsive.</p>

                                <ul className="social-icon">
                                    <li>
                                        <span>
                                            <i className="bx bxl-facebook"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="bx bxl-instagram"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="bx bxl-linkedin-square"></i>
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="bx bxl-twitter"></i>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>

                                <ul className="address">
                                    <li className="location">
                                        <i className="bx bxs-location-plus"></i>
                                        2104 Stech Dr, Bridgewater Township, NJ 08807, USA
                                    </li>
                                    <li>
                                        <i className="bx bxs-envelope"></i>
                                        <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#5b333e3737341b283e2a2f2275383436"><span className="__cf_email__" data-cfemail="c1a9a4adadae81b2a4b0b5b8efa2aeac">example@smart.it.co</span></a>
                                        <span>skype: adonis11300522@gmail.com</span>
                                    </li>
                                    <li>
                                        <i className="bx bxs-phone-call"></i>
                                        <a href="tel:+1-(514)-312-5678">+1 (804) 571-0993</a>
                                        <a href="tel:+1-(514)-312-5678">+1 (804) 571-0993</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Solution</h3>

                                <ul className="import-link">
                                    <li>
                                        <span>Website Design</span>
                                    </li>
                                    <li>
                                        <span>Mobile Design</span>
                                    </li>
                                    <li>
                                        <span>Website Development</span>
                                    </li>
                                    <li>
                                        <span>Mobile Development</span>
                                    </li>
                                    <li>
                                        <span>Software Development</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Cases</h3>

                                <ul className="import-link">
                                    <li>
                                        <span>Mobile Application with AI</span>
                                    </li>
                                    <li>
                                        <span>E-commerce platform</span>
                                    </li>
                                    <li>
                                        <span>ERP platform</span>
                                    </li>
                                    <li>
                                        <span>Blog</span>
                                    </li>
                                    <li>
                                        <span>Case Studies</span>
                                    </li>
                                    <li>
                                        <span>User Guides</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copy-right-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-md-12">
                            <p className="text-center">COPYRIGHT © SMART IT CO. 2023 | ALL RIGHTS RESERVED</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="go-top">
                <i className="bx bx-chevrons-up"></i>
                <i className="bx bx-chevrons-up"></i>
            </div>
        </div>
    )
}