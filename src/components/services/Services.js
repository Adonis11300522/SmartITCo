import { Image } from "react-bootstrap";
import ServiceImg1 from '../../assets/img/services/services-12.jpg';
import ServiceImg2 from '../../assets/img/services/services-11.jpg';
import ServiceImg3 from '../../assets/img/services/services-10.jpg';
import ServiceImg4 from '../../assets/img/services/services-9.jpg';

export const ServicesSection = () => {
    return (
        <div className="ServicesSection">
            <section className="services-area pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Our Services</span>
					<h2>You Can Receive The Best Service Provided By Us As Below.</h2>
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
								<h3><a href="services-details.html">Website & Mobile Design</a></h3>
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
								<h3><a href="services-details.html">Website Development</a></h3>
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
								<h3><a href="services-details.html">Mobile Development</a></h3>
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
								<h3><a href="services-details.html">Software Development</a></h3>
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