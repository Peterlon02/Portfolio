import { Container } from "react-bootstrap"
import styles from './About.module.css'

function About(){
    return(
        <Container fluid className={`p-0 ${styles.container}`}>
            <Container className="bg-white text-center w-50 ">
                <h1>About Me</h1>
                <p>Sono Pietro, un junior web developer con una passione per il mondo del frontend e una forte inclinazione verso React. Mi piace trasformare idee in realtà digitali e migliorare l’esperienza utente attraverso design funzionali.</p>
            </Container>
        </Container>
    )
}

export default About