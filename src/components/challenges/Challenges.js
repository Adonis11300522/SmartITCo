import { Image } from "react-bootstrap";
import ChallengesImg from '../../assets/img/challenges-shape.png';

export const ChallengesSection = () => {
    return (
        <section className="challenges-area challenges-area-two pt-100 pb-70">
			<div className="container">
				<div className="section-title white-title">
					<span>How We Work</span>
					<h2 className="text-white">Build Software Quickly Without Compromising On Quality.</h2>
				</div>

				<div className="row">
					<div className="col-lg-3 col-sm-6">
						<div className="single-challenges overly-one">
							<div className="overly-two">
								<i className="flaticon-authentication"></i>
								<h3>White label development</h3>
								{/* <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p> */}
								<span className="flaticon-threat"></span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-challenges overly-one">
							<div className="overly-two">
								<i className="flaticon-web-protection"></i>
								<h3>Agile working process</h3>
								{/* <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p> */}
								<span className="flaticon-cyber"></span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-challenges overly-one">
							<div className="overly-two">
								<i className="flaticon-testing"></i>
								<h3>Flexible pricing solutions</h3>
								{/* <p>Lorem ipsum dolor sit amet, con sectetur adipiscing elit sed do.</p> */}
								<span className="flaticon-cyber-security-1"></span>
							</div>
						</div>
					</div>

					<div className="col-lg-3 col-sm-6">
						<div className="single-challenges overly-one">
							<div className="overly-two">
								<i className="flaticon-worldwide"></i>
								<h3>software development</h3>
								{/* <p>Express software development</p> */}
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