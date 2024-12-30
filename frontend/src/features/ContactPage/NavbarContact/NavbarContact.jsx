import React from "react";
import styles from './NavbarContact.module.css'
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function NavbarContact(){
    return(
        <Container fluid className={`${styles.container}`} >
            <h1 className={`${styles.text}`}>CONTATTAMI</h1>
            <Container  className={`${styles.containerlin}`}>
                <div style={{paddingTop:'10px'}}>
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    <a href="https://www.linkedin.com/in/pietro-filosa/" style={{textDecoration:'none', color:'white', paddingLeft:'20px'}}>
                        https://www.linkedin.com/in/pietro-filosa/
                    </a>
                </div>
                <div style={{paddingTop:'10px'}}>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    <a href="https://github.com" style={{textDecoration:'none', color:'white', paddingLeft:'20px'}}>
                        https://github.com
                    </a>
                </div >
                <div style={{display:'flex', alignItems:'center', paddingTop:'10px'}}>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <div  style={{textDecoration:'none', color:'white', paddingLeft:'20px'}}>
                        pietro.filosa2002@gmail.com
                    </div>
                </div>
                
            </Container>
        </Container>
    )
}

export default NavbarContact