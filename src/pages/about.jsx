import SectionComponent from "../components/SectionComponent";
import Bio from '../images/bio-h1.png'

function About() {
    return(
        <main>
            <SectionComponent 
                nombre={'Nanuel Castro'}
                foto={Bio}
            />
        </main>
    )
}

export default About;