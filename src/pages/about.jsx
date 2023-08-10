import SectionComponent from "../components/SectionComponent";
import Bio from '../images/bio-h1.png'
import Juan from '../images/bio-2.jpg'
import Cuffaro from '../images/bio-3.jpg'
import Alan from '../images/bio-4.jpg'
import Medina from '../images/bio-5.jpg'
import SectionReverseComponent from "../components/SectionReverseComponent";

function About() {
    return (
        <main className="bg-dark">
            <SectionComponent
                nombre={'Nahuel Castro'}
                foto={Bio}
            />

            <SectionReverseComponent
                nombre={'Juan'}
                foto={Juan}
            />

            <SectionComponent
                nombre={'Cuffaro Mufaro'}
                foto={Cuffaro}
            />

            <SectionReverseComponent
                nombre={'Alan'}
                foto={Alan}
            />

            <SectionComponent
                nombre={'Federico Medina'}
                foto={Medina}
            />
        </main>
    )
}

export default About;