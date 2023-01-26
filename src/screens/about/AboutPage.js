import { useEffect, useState } from "react";
import { PageTitleSection } from "../../components/pagetitle/PageTitle";
import { Preloader } from "../../components/preloader/Preloader";

export default function AboutPage () {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(true);
        }, 5000);
    }, []);

    return (
        isLoading == false ?
            (
                <Preloader />
            ) :
            (
                <div className="AboutPage">
                    <PageTitleSection title="About Us"/>
                </div>
            )        
    )
}