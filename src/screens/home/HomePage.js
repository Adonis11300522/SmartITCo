import { useEffect, useState } from "react";
import { ApproachSection } from "../../components/approach/Approach";
import { CarouselBanner } from "../../components/banners/Banners";
import { ChallengesSection } from "../../components/challenges/Challenges";
import { FeatureSection } from "../../components/feature/Feature";
import { Footer } from "../../components/layouts/footer/Footer";
import { Header } from "../../components/layouts/header/Header";
import { Preloader } from "../../components/preloader/Preloader";
import { ServicesSection } from "../../components/services/Services";
import { PricingSection } from "../../components/pricing/Pricing";
import { CounterSection } from "../../components/counter/Counter";
import { TeamSection } from "../../components/team/Team";
import { PageTitleSection } from "../../components/pagetitle/PageTitle";

export default function HomePage () {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 5000);
    }, []);

    return (
             isLoading == false ? 
             (
                <Preloader/>
             ) : 
             (
                <div className="HomePage">
                    <CarouselBanner/>
                    <FeatureSection/>
                    <ChallengesSection/>
                    <ServicesSection/>
                    <CounterSection/>
                    <TeamSection/>
                </div>
             ) 
    )
}