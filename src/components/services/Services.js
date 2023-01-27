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
								<span>
									<Image src={ServiceImg1} alt="Image"/>
								</span>
							</div>

							<div className="services-content">
								<h3><span className="text-white">Website & Mobile Design</span></h3>								
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<div className="services-img">
								<span>
									<Image src={ServiceImg2} alt="Image"/>
								</span>
							</div>

							<div className="services-content">
								<h3><span className="text-white">Website Development</span></h3>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<div className="services-img">
								<span>
									<Image src={ServiceImg3} alt="Image"/>
								</span>
							</div>

							<div className="services-content">
								<h3><span className="text-white">Mobile Development</span></h3>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-services">
							<div className="services-img">
								<span>
									<Image src={ServiceImg4} alt="Image"/>
								</span>
							</div>

							<div className="services-content">
								<h3><span className="text-white">Software Development</span></h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </div>
    )
}