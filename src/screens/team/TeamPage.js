import { useEffect, useState } from "react";
import { PageTitleSection } from "../../components/pagetitle/PageTitle";
import { Preloader } from "../../components/preloader/Preloader";
import { TeamSection } from "../../components/team/Team";

export default function TeamPage() {

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
                <div className="TeamPage">
                    <PageTitleSection title="Team" />
                    <TeamSection/>
                </div>
            )
    )
}