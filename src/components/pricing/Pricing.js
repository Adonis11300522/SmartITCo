import { Image } from "react-bootstrap";
import PricingShapeImg1 from '../../assets/img/pricing-shape.png';
import PricingShapeImg2 from '../../assets/img/pricing-shape-2.png';

export const PricingSection = () => {
    return (
        <div className="PricingSection">
           <section className="pricing-area bg-color pt-100 pb-70">
			<div className="container">
				<div className="section-title">
					<span>Security Packages</span>
					<h2>We Have Different Types Of Pricing Plans</h2>
				</div>

				<div className="row">
					<div className="col-lg-4 col-md-6">
						<div className="single-pricing overly-one">
							<div className="overly-two">
								<div className="pricing-title">
									<h3>Basic</h3>
									<h2>Free</h2>
									<span>/Per month</span>
								</div>
	
								<ul>
									<li>30 Days Product Testing</li>
									<li>Upgrade Anytime Protection</li>
									<li>Unlimited Malware Removal</li>
									<li>24/7 Live Assistance</li>
									<li>Scan Every 12 Hrs</li>
									<li>Configure Software</li>
								</ul>
	
								<a href="#" className="default-btn">
									<span>Read More</span>
								</a>
	
								<div className="pricing-shape">
									<Image src={PricingShapeImg1} alt="Image"/>
								</div>

								<div className="pricing-shape-2">
									<Image src={PricingShapeImg2} alt="Image"/>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6">
						<div className="single-pricing overly-one active">
							<div className="overly-two">
								<div className="pricing-title">
									<h3>Popular</h3>
									<h2><sub>$</sub>29</h2>
									<span>/Per month</span>
								</div>
	
								<ul>
									<li>40 Days Product Testing</li>
									<li>Upgrade Anytime Protection</li>
									<li>Unlimited Malware Removal</li>
									<li>24/7 Live Assistance</li>
									<li>Scan Every 13 Hrs</li>
									<li>Configure Software</li>
								</ul>
	
								<a href="#" className="default-btn">
									<span>Read More</span>
								</a>
	
								<div className="pricing-shape">
									<Image src={PricingShapeImg1} alt="Image"/>
								</div>

								<div className="pricing-shape-2">
									<Image src={PricingShapeImg2} alt="Image"/>
								</div>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
						<div className="single-pricing overly-one">
							<div className="overly-two">
								<div className="pricing-title">
									<h3>Basic</h3>
									<h2><sub>$</sub>59</h2>
									<span>/Per month</span>
								</div>
	
								<ul>
									<li>50 Days Product Testing</li>
									<li>Upgrade Anytime Protection</li>
									<li>Unlimited Malware Removal</li>
									<li>24/7 Live Assistance</li>
									<li>Scan Every 14 Hrs</li>
									<li>Configure Software</li>
								</ul>
	
								<a href="#" className="default-btn">
									<span>Read More</span>
								</a>
	
								<div className="pricing-shape">
									<Image src={PricingShapeImg1} alt="Image"/>
								</div>

								<div className="pricing-shape-2">
									<Image src={PricingShapeImg2} alt="Image"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section> 
        </div>
    )
}