import { Link } from "react-router-dom"

export const PageTitleSection = ({title}) => {
    return (
        <div className="PageTitleSection">
            <div className="page-title-area page-title-style-two">
			<div className="container">
				<div className="page-title-content">
					<h2>{title}</h2>
					<ul>
						<li>
                            <Link to="/"><i className="bx bx-home"></i>Home</Link>	
						</li>
						<li className="active">{title}</li>
					</ul>
				</div>
			</div>
		</div>
        </div>
    )
}