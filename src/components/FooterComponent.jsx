import LogoNav from "../images/logonav.png"
import '../css/footer.css'

function FooterComponent() {
    return (
        <footer className="bg-dark px-4 py-2 text-center text-white">
            <img className="d-block mx-auto" src={LogoNav} alt="" width="193" height="117" />
            {/* <h1 className="display-5 fw-bold">Centered hero</h1> */}
            <div className="col-lg-6 mx-auto">
                <p className="lead">
                    No nos hacemos cargo si se ofenden
                </p>
            </div>
            <div className="col-lg-6 mx-auto">
                <p className="lead footer-text">
                    Vengan de a Uno. Todos los Derechos Reservados | Desarrollado por <span><a href="https://kaleidoscopic-biscotti-540699.netlify.app/" target="_blank" rel="noopener noreferrer">Juan Hinojosa</a></span>
                </p>
            </div>
        </footer>
    )
}

export default FooterComponent;