import { ApproachSection } from "../../components/approach/Approach";
import { CarouselBanner } from "../../components/banners/Banners";
import { ChallengesSection } from "../../components/challenges/Challenges";
import { FeatureSection } from "../../components/feature/Feature";
import { Footer } from "../../components/layouts/footer/Footer";
import { Header } from "../../components/layouts/header/Header";

export default function HomePage () {
    return (
        <div className="HomePage">
            <CarouselBanner/>
            <FeatureSection/>
            <ApproachSection/>
            <ChallengesSection/>
        </div>
    )
}