import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useRef } from "react";
import './NewProfilePage.css'

export default function NewProfileModal() {
    const nameRef = useRef();
    const designationRef = useRef();
    const descriptionRef = useRef();
    const twitterRef = useRef();
    const linkedinRef = useRef();
    const imageRef = useRef();

    async function handleSubmit(e) {
        e.preventDefault();
        const newProfile = {
            name: nameRef.current.value,
            designation: designationRef.current.value,
            description: descriptionRef.current.value,
            twitter: twitterRef.current.value,
            linkedin: linkedinRef.current.value,
            image: imageRef.current.value,
        };

        try {
            await axios.post(
                `${process.env.REACT_APP_BACKEND_URL}/people/`,
                newProfile,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
                    },
                }
            );
            // Redirect or handle success
            window.location.href = "/";
        } catch (error) {
            // Handle error
            console.error('Error creating profile:', error);
        }
    }

    return (
        <Container className="profile-container">
            <Form onSubmit={handleSubmit} className="profile-form">
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Designation</Form.Label>
                    <Form.Control type="text" ref={designationRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} ref={descriptionRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Linkedin</Form.Label>
                    <Form.Control type="text" ref={linkedinRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Twitter</Form.Label>
                    <Form.Control type="text" ref={twitterRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control type="text" ref={imageRef} required />
                </Form.Group>
                <div className="mt-2">
                    <Button type="submit" variant="primary">
                        Create Profile
                    </Button>
                </div>
            </Form>
        </Container>
    );
}
