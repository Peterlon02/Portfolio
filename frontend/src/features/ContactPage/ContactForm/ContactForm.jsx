import { Container, Form, Button, Alert } from 'react-bootstrap'
import styles from './ContactForm.module.css'
import { useState } from 'react';

function ContactForm(){

    const [formData, setFormData] = useState({ email: "", message: "" });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            if (result.success) {
                setStatus("success");
                setFormData({ email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Errore:", error);
            setStatus("error");
        }
    };

    return(
        <Container className='bg-dark mt-5 ' style={{}}>
             {status === "success" && <Alert variant="success">Messaggio inviato con successo!</Alert>}
             {status === "error" && <Alert variant="danger">Errore nell'invio del messaggio.</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label className='text-white'>Email</Form.Label>
                    <Form.Control type='email' name='email' value={formData.email} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className='text-white'>Messaggio</Form.Label>
                    <Form.Control as='textarea' name='message' value={formData.message} onChange={handleChange}></Form.Control>
                </Form.Group>
                <Button className='w-100 mb-3' variant="danger" type="submit">Invia</Button>
            </Form>
        </Container>
    )
}

export default ContactForm