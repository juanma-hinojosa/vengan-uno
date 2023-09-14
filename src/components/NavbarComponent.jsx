import { Link } from "react-router-dom";
import LogoNav from "../images/logonav.png"

function NavbarComponent() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={LogoNav} alt="" width="58" height="34" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link orange" aria-current="page" to="/">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link orange" to="/about">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link orange" to="/episodios">Episodios</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;