import { Container } from "react-bootstrap"
import styles from './About.module.css'
import ImagesSkill from '../../images/Portfolio.png'
function About(){
    return(
        <Container fluid className={`${styles.container}`}>
            <Container className={` ${styles.conatiner_box}`}>
                <h1>ABOUT ME</h1>
                <p>Sono Pietro, un junior web developer con una passione per il mondo del frontend e una forte inclinazione verso React. Mi piace trasformare idee in realtà digitali e migliorare l’esperienza utente attraverso design funzionali.</p>
            </Container>
            <Container className={` ${styles.conatiner_box}`}>
                <h1>SKILLS</h1>
                <div className="">
                    <img className="img-fluid" src={ImagesSkill} />
                </div>
            </Container>
            <Container className={` ${styles.conatiner_box}`}>
                <h1>TIMELINE</h1>
                <p>Laurea BSc in Computer Engineering & Artificial Intelligence [In corso]</p>
                <p>Bootcamp Web Developer - Epicode (Part-time, 6 mesi)</p>
                <p>Diploma Liceo Scientifico indirizzo Scienze Applicate</p>
            </Container>
            <Container className={` ${styles.conatiner_box}`}>
                <h1>GOAL</h1>
                <p>Attualmente sto lavorando per migliorare le mie competenze nello stack MERN e puntando a creare applicazioni sempre più innovative e performanti</p>
            </Container>
        </Container>
    )
}

export default About