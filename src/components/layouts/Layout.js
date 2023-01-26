import { Outlet } from "react-router-dom"
import { Footer } from "./footer/Footer"
import { Header } from "./header/Header"

export const ClientLayout = () => {
    return (
        <div className="ClientLayout">
            <Header/>
                <Outlet/>
            <Footer/>
        </div>
    )
}