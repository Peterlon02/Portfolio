import React, { useState } from "react";
import styles from './Navbar.module.css';
import {Link} from 'react-router-dom';
import { Button, Col, Row, } from "react-bootstrap";

function Navbar({setChose}){
    
    return(
        <Row className={`${styles.container_navbar}`}>
            <Col md={2} >
                <Button variant="none" onClick={()=>{setChose('Home')}} className={`${styles.button_navbar} ${styles.text_navbar}`}>HOME</Button>
            </Col>
            <Col md={2} >
                <Button variant="none" onClick={()=>{setChose('About')}} className={`${styles.button_navbar} ${styles.text_navbar}`}>ABOUT</Button>
            </Col>
            <Col md={2} >
                <Button variant="none" onClick={()=>{setChose('Work')}} className={`${styles.button_navbar} ${styles.text_navbar}`}>WORK</Button>
            </Col>
            <Col md={2} >
                <Button variant="none" onClick={()=>{setChose('Contact')}} className={`${styles.button_navbar} ${styles.text_navbar}`}>CONTACT</Button>
            </Col>
        </Row>
    )
}

export default Navbar