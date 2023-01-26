import { Image } from 'react-bootstrap';
import Icon from '../../assets/img/icon.svg';

export const FeatureSection = () => {
    return (
        <section className="feature-area pb-70">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-sm-6">
						<div className="single-feature overly-one">
							<div className="overly-two">
								<div className="title">
									<i><Image src={Icon} width="50"/></i>
									<h3>Strong Core Values</h3>
								</div>
								<p>Integrity, Dignity, and Grit. We believe it’s better to say NO than commit to something we know we can’t deliver. Hence, if we’re saying we can do it, we mean it.</p>
							</div>
						</div>
					</div>

					<div className="col-lg-4 col-sm-6">
						<div className="single-feature overly-one">
							<div className="overly-two">
								<div className="title">
                                    <i><Image src={Icon} width="50"/></i>
									<h3>Valuable Advisory</h3>
								</div>
								<p>We don’t just build what you envision. We’ll advise you on what to do instead when we foresee that your ideas will hurt your time to market and your business.</p>
							</div>
						</div>
					</div>					

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-feature overly-one">
							<div className="overly-two">
								<div className="title">
									<i><Image src={Icon} width="50"/></i>
									<h3>No Language Barriers</h3>
								</div>
								<p>At Smart IT Co, nothing gets lost in translations. All people working at Smart IT Co have excellent English language skills ensuring your ideas are not lost in translations.</p>
							</div>
						</div>
					</div>

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-feature overly-one">
							<div className="overly-two">
								<div className="title">
									<i><Image src={Icon} width="50"/></i>
									<h3>Top-notch Expectation Setting</h3>
								</div>
								<p>We do all we can to ensure that your experience goes smoothly and you don’t face any unpleasant surprises regarding your product delivery.</p>
							</div>
						</div>
					</div>

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-feature overly-one">
							<div className="overly-two">
								<div className="title">
                                    <i><Image src={Icon} width="50"/></i>
									<h3>Direct Communication with Developers</h3>
								</div>
								<p>We don't hide our developers behind salespeople. You get to communicate with them directly, explain your requirements & give feedback.</p>
							</div>
						</div>
					</div>                    

                    <div className="col-lg-4 col-sm-6 offset-sm-3 offset-lg-0">
						<div className="single-feature overly-one">
							<div className="overly-two">
								<div className="title">
									<i><Image src={Icon} width="50"/></i>
									<h3>Top-notch Expectation Setting</h3>
								</div>
								<p>We do all we can to ensure that your experience goes smoothly and you don’t face any unpleasant surprises regarding your product delivery.</p>
							</div>
						</div>
					</div>
                    
                    
				</div>
			</div>
		</section>
    )
}