import LogoHero from '../images/logonav.png'
import '../css/home.css';
import Group from '../images/grupo-home.png'
import SectionComponent from '../components/SectionComponent';
import { motion } from 'framer-motion'
import Nahuel from '../images/elenco/bio2.png'
import Juan from '../images/elenco/bio5.png'
import Cuffaro from '../images/elenco/bio4.png'
import Alan from '../images/elenco/bio1.png'
import Medina from '../images/elenco/bio3.png'

const Home = () => {
    return (
        <main>
            <section className='hero-section'>
                <figure className="container col-xxl-8 px-4 py-5 ">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-6">
                            <motion.img initial={{ scale: 0.5 }} transition={3} animate={{ scale: 1 }} src={LogoHero} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </div>
                        <div className="col-lg-6 text-white">
                            <h1 className="display-5 fw-bold lh-1 mb-3">Responsive left-aligned hero with image</h1>
                            <p className="light">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                {/* <button type="button" className="btn btn-danger btn-lg px-4 me-md-2">Primary</button> */}
                                {/* <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button> */}
                            </div>
                        </div>
                    </div>
                </figure>
            </section>

            <div className="galeria-wrapper py-5">
                <h1 className="display-5 fw-bold lh-1 mb-5 orange">Panelista</h1>

                <section className='galeria-img'>
                    <img src={Nahuel} alt="Foto-Panelista" />
                    <img src={Juan} alt="Foto-Panelista" />
                    <img src={Cuffaro} alt="Foto-Panelista" />
                    <img src={Alan} alt="Foto-Panelista" />
                    <img src={Medina} alt="Foto-Panelista" />
                </section>
            </div>

            <SectionComponent
                nombre="Como Comenzamos?"
                foto={Group}
            />

        </main>
    )
}

export default Home;