import { useEffect, useState } from "react";
import { PageTitleSection } from "../../components/pagetitle/PageTitle";
import { Preloader } from "../../components/preloader/Preloader";

export default function ContactPage() {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 3000);
    }, []);

    return (
        isLoading == false ?
            (
                <Preloader />
            ) :
            (
                <div className="ContactPage">
                    <PageTitleSection title="Contact Us" />
                    <section className="main-contact-area ptb-100">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-8">
                                    <div className="contact-wrap">
                                        <div className="contact-form">
                                            <div className="contact-title">
                                                <h2>Write Us</h2>
                                            </div>

                                            <form id="contactForm">
                                                <div className="row">
                                                    <div className="col-lg-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="mb-2">Name</label>
                                                            <input type="text" name="name" id="name" className="form-control" required data-error="Please enter your name" />
                                                            <div className="help-block with-errors"></div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-6 col-sm-6">
                                                        <div className="form-group">
                                                            <label className="mb-2">Email Address</label>
                                                            <input type="email" name="email" id="email" className="form-control" required data-error="Please enter your email" />
                                                            <div className="help-block with-errors"></div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label className="mb-2">Subject</label>
                                                            <input type="text" name="msg_subject" id="msg_subject" className="form-control" required data-error="Please enter your subject" />
                                                            <div className="help-block with-errors"></div>
                                                        </div>
                                                    </div>

                                                    <div className="col-12">
                                                        <div className="form-group">
                                                            <label className="mb-2">Message</label>
                                                            <textarea name="message" className="form-control" id="message" cols="30" rows="10" required data-error="Write your message"></textarea>
                                                            <div className="help-block with-errors"></div>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12 col-md-12">
                                                        <button type="submit" className="default-btn btn-two">
                                                            <span>Send Message</span>
                                                        </button>
                                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                                        <div className="clearfix"></div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-4">
                                    <div className="contact-info">
                                        <h3>Our contact details</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>

                                        <ul className="address">
                                            <li className="location">
                                                <i className="bx bxs-location-plus"></i>
                                                <span>Address</span>
                                                2104 Stech Dr, Bridgewater Township, NJ 08807, USA
                                            </li>
                                            <li>
                                                <i className="bx bxs-phone-call"></i>
                                                <span>Phone</span>
                                                <a href="tel:+1-(514)-312-5678">+1 (804) 571-0993</a>
                                                <a href="tel:+1-(514)-312-6677">+1 (804) 571-0993</a>
                                            </li>
                                            <li>
                                                <i className="bx bxs-envelope"></i>
                                                <span>Email</span>
                                                <a href="https://templates.envytheme.com/cdn-cgi/l/email-protection#c6aea3aaaaa986b5a3b7b2bfe8a5a9ab"><span className="__cf_email__" data-cfemail="a9c1ccc5c5c6e9daccd8ddd087cac6c4"></span></a>
                                                <a href="#">skype: adonis11300522@gmail.com</a>
                                            </li>
                                        </ul>

                                        <div className="sidebar-follow-us">
                                            <h3>Follow us:</h3>

                                            <ul className="social-wrap">
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className="bx bxl-twitter"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className="bx bxl-instagram"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className="bx bxl-facebook"></i>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="_blank">
                                                        <i className="bx bxl-youtube"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="map-area">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96573.31103674119!2d-73.91097366523668!3d40.85176866829554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c28b553a697cb1%3A0x556e43a78ff15c77!2sThe%20Bronx%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1600202608808!5m2!1sen!2sbd"></iframe>
                    </div>
                </div>
            )

    )
}