import { Button, Col, Container, Row } from "react-bootstrap";
import styles from './ColumnText.module.css'
import CustomButton from './Button/Button'
function ColumnText({setSelectedSection}){
    return(
        <Col md={6} className={`${styles.column_container} `} >
            <h1 className={`${styles.text_presentation}`}>Hi, I’m Pietro. Junior React Developer</h1>
           <Container fluid className={`${styles.container_buttons}`}>
           <Col md={6} className={`${styles.button}`}>
                <CustomButton onClick={()=>setSelectedSection('Contact')} text='contact me'/>
           </Col> 
           <Col md={6} className={`${styles.button}`}>
                <CustomButton onClick={()=>setSelectedSection('Work')}  text='works'/>
           </Col> 
           </Container>
        </Col>
    )
}

export default ColumnText;