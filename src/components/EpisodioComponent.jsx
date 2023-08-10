import { Link } from "react-router-dom";

function EpisodioComponent(props) {
    return (
        <figure className="episodio-wrapper" >
            <div >
                <div className="img-wrapper">
                    <img src={props.img} alt="imagen episodio" />
                </div>
                <div className="info-wrapper">
                    <h1>{props.name}</h1>
                    <p card-subtitle>{props.resumen}</p>
                    <div className="wrapper-link" >
                        <h3>{props.fecha}</h3>
                        {/* <a href="https://open.spotify.com/show/3IloWajNP7AEmoEvtQiHsD?si=6fd8e6b0055e4b86" target="_blank"> escuchar</a> */}
                        <Link to={`/plataformas/${props.name}`}>Escuchar</Link>
                    </div>
                </div>
            </div>
        </figure>
    )
}

export default EpisodioComponent;