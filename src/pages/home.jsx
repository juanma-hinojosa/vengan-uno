import LogoHero from '../images/logonav.png'
import '../css/home.css';
import Group from '../images/grupo-home.png'
import SectionComponent from '../components/SectionComponent';
import Nahuel from '../images/elenco/bio2.png'
import Juan from '../images/elenco/bio5.png'
import Cuffaro from '../images/elenco/bio4.png'
import Alan from '../images/elenco/bio1.png'
import Medina from '../images/elenco/bio3.png'
import Pablo from '../images/elenco/pablo.jpg'
import Paula from '../images/elenco/paula.jpg'
import Marian from '../images/elenco/mariano.jpg'
import DetailComponent from '../components/DetailsComponent';
import episodios from "../json/episodiio.json"

const Home = () => {
    const copiarEpisodios = [...episodios]
    const ultimoElemento = copiarEpisodios.slice(1).reverse()
    const estrenoEpisodio = ultimoElemento[0]
    // console.log(estrenoEpisodio);

    const iconsLink = [
        { icon: "fa-brands fa-instagram", link: "https://www.instagram.com/venganuno/", time: '2000' },
        { icon: "fa-brands fa-x-twitter", link: "https://twitter.com/venganuno?lang=es", time: '2200' },
        { icon: "fa-brands fa-youtube", link: "https://www.youtube.com/@VenganDeaUno/videos", time: '2500' },
        { icon: "fa-brands fa-spotify", link: "https://open.spotify.com/show/3IloWajNP7AEmoEvtQiHsD?si=f72a936e73ae4257", time: '2700' }
    ]

    return (
        <main className='bg-dark'>
            <section className='hero-section'>
                <figure className="container col-xxl-8 px-4 py-5 ">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <img data-aos="zoom-in-up" src={LogoHero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6 text-white">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Un programda radicado en el mejor pais del Mundo</h1>
                            <p className="light">
                                Principalmente hablamos de futbol. Pero recuerden, todo lo aqui narrado, esta cargado de ironia y humor negro, por lo tanto nadie debe escucharlo.
                            </p>
                            <div className='container-links'>
                            {iconsLink.map(iconLink => 
                                <a className='icon-link' data-aos='fade-up' data-aos-duration={iconLink.time} href={iconLink.link} target='_blank'>
                                    <i className={iconLink.icon}></i>
                                </a>    
                            )}
                            </div>
                        </div>
                    </div>
                </figure>
            </section>

            <div className="galeria-wrapper py-5">
                <h1 className="display-5 fw-bold lh-1 mb-5 orange">Panelistas</h1>

                <section className='galeria-img'>
                    <img src={Nahuel} alt="Foto-Panelista" />
                    <img src={Juan} alt="Foto-Panelista" />
                    <img src={Pablo} alt="Foto-Panelista" />
                    <img src={Cuffaro} alt="Foto-Panelista" />
                    <img src={Paula} alt="Foto-Panelista" />
                    <img src={Marian} alt="Foto-Panelista" />
                    <img src={Alan} alt="Foto-Panelista" />
                    <img src={Medina} alt="Foto-Panelista" />
                </section>
            </div>

            <SectionComponent
                nombre="Como Comenzamos?"
                foto={Group}
            />
            <div className="bg-dark details-wrapper text-center">
                <DetailComponent
                    name={estrenoEpisodio.name}
                    resumen={estrenoEpisodio.resumen}
                    link={estrenoEpisodio.link}
                />
            </div>
        </main>
    )
}

export default Home;