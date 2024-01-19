import {DiAndroid} from "react-icons/di";
import {Route, Routes} from "react-router-dom";
import About from "../About/About.jsx";
import Home from "../Home/Home.jsx";

export default function Header({children}) {

    return (
            <header className="p-3 text-bg-dark">
                <div className="container">
                    <div
                        className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                            <DiAndroid/>
                        </a>

                        <Routes>
                                <Route path="/" element={<Home />}/>
                                <Route path="about" element={<About />} />

                        </Routes>

                        <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                            <input type="search" className="form-control form-control-dark text-bg-dark"
                                   placeholder="Search..." aria-label="Search"/>
                        </form>
                        {children}
                        <div className="text-end">
                        </div>
                    </div>
                </div>
            </header>
    )
}