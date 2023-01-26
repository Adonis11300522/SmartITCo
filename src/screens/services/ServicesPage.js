import { useEffect, useState } from "react";
import { PageTitleSection } from "../../components/pagetitle/PageTitle";
import { Preloader } from "../../components/preloader/Preloader";
import { ServicesSection } from "../../components/services/Services";
import { FeatureSection } from "../../components/feature/Feature";
import { CounterSection } from "../../components/counter/Counter";

export default function ServicesPage() {

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
                <div className="ServicesPage">
                    <PageTitleSection title="Services" />
                    <ServicesSection/>
                    <FeatureSection className="mt-50"/>
                </div>
            )
    )
}