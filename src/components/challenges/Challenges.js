import { Image } from "react-bootstrap";
import ChallengesImg from '../../assets/img/challenges-shape.png';

export const ChallengesSection = () => {
    return (
        <section className="challenges-area challenges-area-two pt-100 pb-70">
			<div className="container">
				<div className="section-title white-title">
					<span>Our Challenges</span>
					<h2>You Can Protect Your Organization’s Cybersecurity By Us</h2>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-challenges overly-one">
							<div className="overly-two">
								<i className="flaticon-threat"></i>
								<h3>Identifying Threats</h3>
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>
								<span className="flaticon-threat"></span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-challenges overly-one">
							<div className="overly-two">
								<i className="flaticon-cyber"></i>
								<h3>Cyber Risk Assessment</h3>
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>
								<span className="flaticon-cyber"></span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-challenges overly-one">
							<div className="overly-two">
								<i className="flaticon-cyber-security-1"></i>
								<h3>Testing Cyber Security</h3>
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>
								<span className="flaticon-cyber-security-1"></span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-challenges overly-one">
							<div className="overly-two">
								<i className="flaticon-password"></i>
								<h3>Managing Cloud Security</h3>
								<p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p>
								<span className="flaticon-password"></span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="challenges-shape">
				<Image src={ChallengesImg} alt="Image"/>
			</div>
		</section>
    )
}