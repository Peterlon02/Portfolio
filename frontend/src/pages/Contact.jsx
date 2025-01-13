import { Container } from "react-bootstrap"
import NavbarContact from "../features/ContactPage/NavbarContact/NavbarContact"
import ContactForm from "../features/ContactPage/ContactForm/ContactForm"

function Contact(){
    return(
        <div style={{paddingTop:'20px'}}>
            <NavbarContact />
            <ContactForm />
        </div>
    )
}
export default Contact