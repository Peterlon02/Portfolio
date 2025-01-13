import React from "react";
import styles from './NavbarContact.module.css'
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function NavbarContact(){
    return(
        <Container fluid className={`${styles.container} p-0`} >
            <Col xs={12}  lg={7} className=""  >
            <h1 className={`${styles.text} `}>CONTATTAMI</h1>
            </Col>
            <Col  className={`${styles.containerlin}  `}>
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
                <div style={{ paddingTop:'10px',display:'flex', alignItems:'center', justifyContent:'start'} }>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <div  style={{textDecoration:'none', color:'white', paddingLeft:'20px'}}>
                        pietro.filosa2002@gmail.com
                    </div>
                </div>
                
            </Col>
        </Container>
    )
}

export default NavbarContact