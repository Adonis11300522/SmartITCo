import { useEffect, useState } from "react";
import { PageTitleSection } from "../../components/pagetitle/PageTitle";
import { Preloader } from "../../components/preloader/Preloader";
import { Image } from "react-bootstrap";
import BannerImg from '../../assets/img/banner/banner-bg-6.jpg';
import { ChallengesSection } from "../../components/challenges/Challenges";
import { ReviewsSection } from "../../components/reviews/Reviews";
import { FeatureSection } from "../../components/feature/Feature";
import { TeamSection } from "../../components/team/Team";

export default function AboutPage() {

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
                <div className="AboutPage">
                    <PageTitleSection title="About Us" />
                    <section className="about-us-area pt-100 pb-70">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="about-img">
                                        <Image src={BannerImg} alt="Image" />
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="about-content">
                                        <div className="about-title">
                                            <span>About Us</span>
                                            <h2>Smart IT Co is a full-service development agency that develops custom software and web solutions to help businesses accelerate their growth.</h2>
                                        </div>

                                        <div className="tab">
                                            <div className="tab_content">
                                                <div className="tabs_item">
                                                    <p>We deliver exceptional technology solutions for world-class businesses in every industry, from dynamic startups and SMB to Fortune 500 companies.</p>

                                                    <ul>
                                                        <li>
                                                            <i className="bx bx-check-circle"></i>
                                                            91.2% Average Customer Satisfaction
                                                        </li>
                                                        <li>
                                                            <i className="bx bx-check-circle"></i>
                                                            70.3 Net Promoter Score (90th percentile)
                                                        </li>
                                                        <li>
                                                            <i className="bx bx-check-circle"></i>
                                                            174 active world-class clients
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <ChallengesSection/>
                    <TeamSection/>
                    <ReviewsSection/>
                    <FeatureSection/>
                </div>
            )
    )
}