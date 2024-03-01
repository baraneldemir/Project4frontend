import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";
import { useRef } from "react";
import { usePeople } from "../contexts/PeopleContext"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import './EditProfile.css'


export default function EditProfile() {
    const {person, getPeople} = usePeople()
    const { id } = useParams()

    const nameRef = useRef()
    const designationRef = useRef()
    const descriptionRef = useRef()
    const twitterRef = useRef()
    const linkedinRef = useRef()
    const imageRef = useRef()

    useEffect(() => {
       
        getPeople(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, )
    
    async function handleSubmit(e) {
        e.preventDefault();
        const updatedProfile = {
            name: nameRef.current.value,
            designation: designationRef.current.value,
            description: descriptionRef.current.value,
            twitter: twitterRef.current.value,
            linkedin: linkedinRef.current.value,
            image: imageRef.current.value,
            };
        // eslint-disable-next-line no-unused-vars
        try { await axios.put(
        `${process.env.REACT_APP_BACKEND_URL}/people/${id}/`, updatedProfile, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
            },
        }

        );
        window.location.href = "/"
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
        <Form.Control type="text" ref={nameRef} defaultValue={person.name} required />
    </Form.Group>
    <Form.Group>
        <Form.Label>Designation</Form.Label>
        <Form.Control type="text" ref={designationRef} defaultValue={person.designation} required />
    </Form.Group>
    <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control type="textarea" rows={3} ref={descriptionRef} defaultValue={person.description}  />
    </Form.Group>
    <Form.Group>
        <Form.Label>Linkedin</Form.Label>
        <Form.Control type="text" ref={linkedinRef} defaultValue={person.linkedin}  required />
    </Form.Group>
    <Form.Group>
        <Form.Label>Twitter</Form.Label>
        <Form.Control type="text" ref={twitterRef} defaultValue={person.twitter}  required />
    </Form.Group>
    <Form.Group>
        <Form.Label>Profile Picture</Form.Label>
        <Form.Control type="text" ref={imageRef} defaultValue={person.image}  required />
    </Form.Group>
    <div className="mt-2">
        <Button type="submit" variant="primary">
        Update Profile
        </Button>
    </div>
    </Form>
</Container>
)
}
