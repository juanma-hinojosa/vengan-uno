import { Link } from "react-router-dom";


function Error() {
    return(
        <main className="container bg-dark">
            <h2 className="orange">Episodio No encontrado :(</h2>

            <Link className="nav-link orange" to="/">Inicio</Link>
        </main>
    )
}

export default Error;