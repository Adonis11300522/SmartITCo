import { NotFoundSection } from "../../components/404/errors";
import { PageTitleSection } from "../../components/pagetitle/PageTitle";

export default function NotFoundPage () {
    return (
        <div className="NotFoundPage">
            <PageTitleSection/>
            <NotFoundSection/>
        </div>
    )
}