import { Image } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export const ReviewsSection = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
            slidesToSlide: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    return (
        <div className="ReviewsSection">
            <section className="testimonials-area ptb-100 jarallax" data-jarallax='{"speed": 0.3}'>
                <div className="container">
                    <div className="testimonials">
                        <span>What our customers say</span>
                        <Carousel
                            swipeable={false}
                            draggable={false}
                            showDots={true}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlaySpeed={1000}
                            keyBoardControl={true}
                            customTransition="all .5"
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                            dotListClass="custom-dot-list-style"
                            itemClass="carousel-item-padding-10-px"
                        >
                            <div class="testimonials-item">
                                <i class="flaticon-quote"></i>
                                <p>“BairesDev provided a team of hardworking, skilled engineers and they were critical for our success.”</p>

                                <ul>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                </ul>

                                <h3>Paul Degnan</h3>
                                <span>CEO</span>
                            </div>
                            <div class="testimonials-item">
                                <i class="flaticon-quote"></i>
                                <p>“I was thrilled at how closely they worked with us to provide a great outcome.”</p>

                                <ul>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                </ul>

                                <h3>Matt Cesarz</h3>
                                <span>CEO</span>
                            </div>
                            <div class="testimonials-item">
                                <i class="flaticon-quote"></i>
                                <p>“Repeat business is the best testament to a team’s ability to perform, and I have no hesitations hiring them again.”</p>

                                <ul>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                </ul>

                                <h3>Brad Mabry</h3>
                                <span>CEO</span>
                            </div>
                            <div class="testimonials-item">
                                <i class="flaticon-quote"></i>
                                <p>“I talk with the developer every day, and we work well together.”</p>

                                <ul>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                    <li>
                                        <i class="bx bxs-star"></i>
                                    </li>
                                </ul>

                                <h3>Shaun Worcester</h3>
                                <span>CEO</span>
                            </div>
                        </Carousel>;
                    </div>
                </div>
            </section>
            
        </div>
    )
}