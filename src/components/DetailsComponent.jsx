function DetailComponent(props) {
    return (
        <figure className="video-container text-center p-2">
            <h1 className="orange" >{props.name}</h1>
            <div className="video-wrapper">
                <iframe src={props.link} width="624" height="351" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
            <p className=" text-light"> {props.resumen}</p>
        </figure>
    )
}
 
export default DetailComponent