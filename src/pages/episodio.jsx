import { Link } from "react-router-dom"
import episodios from '../json/episodiio.json'
import { useParams } from "react-router"
import DetailComponent from "../components/DetailsComponent"

function Episodio() {
    let { id } = useParams()
    let episodioSelected = episodios.find(episodio => episodio.name === id)
    // console.log(episodioSelected);
    return (
        <main className="bg-dark">
            <DetailComponent
                name={episodioSelected.name}
                resumen={episodioSelected.resumen}
                link={episodioSelected.link}

            />

            <Link to="/plataformas">Volver</Link>
        </main>
    )
}

export default Episodio