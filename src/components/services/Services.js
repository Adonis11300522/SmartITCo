import { Image } from "react-bootstrap";
import ServiceImg1 from '../../assets/img/services/services-1.jpg';
import ServiceImg2 from '../../assets/img/services/services-2.jpg';
import ServiceImg3 from '../../assets/img/services/services-3.jpg';
import ServiceImg4 from '../../assets/img/services/services-4.jpg';

export const ServicesSection = () => {
    return (
        <div className="ServicesSection">
            <section className="services-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Cyber Security Services</span>
					<h2>You Can Protect Your Organization’s Cybersecurity By Services Us</h2>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<div className="services-img">
								<a href="services-details.html">
									<Image src={ServiceImg1} alt="Image"/>
								</a>
							</div>

							<div className="services-content">
								<h3><a href="services-details.html">Website Scanning</a></h3>
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>

								<a href="services-details.html" className="read-more">
									Read More
									<i className="flaticon-right-arrow"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<div className="services-img">
								<a href="services-details.html">
									<Image src={ServiceImg2} alt="Image"/>
								</a>
							</div>

							<div className="services-content">
								<h3><a href="services-details.html">Malware Removal</a></h3>
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>

								<a href="services-details.html" className="read-more">
									Read More
									<i className="flaticon-right-arrow"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<div className="services-img">
								<a href="services-details.html">
									<Image src={ServiceImg3} alt="Image"/>
								</a>
							</div>

							<div className="services-content">
								<h3><a href="services-details.html">Cloud Security</a></h3>
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>

								<a href="services-details.html" className="read-more">
									Read More
									<i className="flaticon-right-arrow"></i>
								</a>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<div className="services-img">
								<a href="services-details.html">
									<Image src={ServiceImg4} alt="Image"/>
								</a>
							</div>

							<div className="services-content">
								<h3><a href="services-details.html">Data Protection</a></h3>
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>

								<a href="services-details.html" className="read-more">
									Read More
									<i className="flaticon-right-arrow"></i>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </div>
    )
}