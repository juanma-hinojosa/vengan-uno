function SectionReverseComponent(props) {
    return (
        <figure className="container col-xxl-8 px-4 py-5 ">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <div className="col-10 col-sm-8 col-lg-6">
                    <img data-aos='zoom-in' src={props.foto} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                </div>
                <div data-aos='fade-right' className="col-lg-6 text-white">
                    <h1 className="display-5 fw-bold lh-1 mb-3 orange">{props.nombre}</h1>
                    <p className="light">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                </div>
            </div>
        </figure>
    )
}

export default SectionReverseComponent