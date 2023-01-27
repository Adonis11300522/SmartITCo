import { Link } from "react-router-dom"

export const CarouselBanner = () => {
    return (
        <section className="banner-area banner-area-two bg-2 jarallax" data-jarallax='{"speed": 0.3}'>
			<div className="container">
				<div className="banner-content">
					<span className="top-title">Top Software Development Company</span>
					<h2 className="text-white">Outsource with us and accelerate your digital transformation</h2>
					<p>Our experienced engineering teams deliver dream-team outcomes, without the hassles of hiring. </p>
					<Link to="/about" className="default-btn"><span>About Us</span></Link>
				</div>
			</div>
		</section>
    )
}