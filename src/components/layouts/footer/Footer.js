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

                                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consec tetur adipiscing.</p>

                                <ul className="social-icon">
                                    <li>
                                        <a href="#">
                                            <i className="bx bxl-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bx bxl-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bx bxl-linkedin-square"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="bx bxl-twitter"></i>
                                        </a>
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
                                        6890 Blvd, The Bronx, NY 1058 New York, USA
                                    </li>
                                    <li>
                                        <i className="bx bxs-envelope"></i>
                                        <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#5b333e3737341b283e2a2f2275383436"><span className="__cf_email__" data-cfemail="c1a9a4adadae81b2a4b0b5b8efa2aeac">[email&#160;protected]</span></a>
                                        <a href="#">skype: example</a>
                                    </li>
                                    <li>
                                        <i className="bx bxs-phone-call"></i>
                                        <a href="tel:+1-(514)-312-5678">+1 (514) 312-5678</a>
                                        <a href="tel:+1-(514)-312-6677">+1 (514) 312-6677</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Solution</h3>

                                <ul className="import-link">
                                    <li>
                                        <a href="#">Secure Private Cloud</a>
                                    </li>
                                    <li>
                                        <a href="#">Online Backup</a>
                                    </li>
                                    <li>
                                        <a href="#">Secure Websites</a>
                                    </li>
                                    <li>
                                        <a href="#">Cyber-Security</a>
                                    </li>
                                    <li>
                                        <a href="#">Enterprise Networks</a>
                                    </li>
                                    <li>
                                        <a href="#">Collaboration</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Resources</h3>

                                <ul className="import-link">
                                    <li>
                                        <a href="#">Cybersecurity Strategies</a>
                                    </li>
                                    <li>
                                        <a href="#">Security Advisories</a>
                                    </li>
                                    <li>
                                        <a href="#">Security News</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Case Studies</a>
                                    </li>
                                    <li>
                                        <a href="#">User Guides</a>
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
                        <div className="col-lg-6 col-md-6">
                            <p>© Seqty is Proudly Owned by <a href="https://envytheme.com/" target="_blank">EnvyTheme</a></p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul className="footer-menu">
                                <li>
                                    <a href="privacy-policy.html" target="_blank">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="terms-conditions.html" target="_blank">
                                        Terms & Conditions
                                    </a>
                                </li>
                            </ul>
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