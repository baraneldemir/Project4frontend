import { Form, Button } from "react-bootstrap"
import axios from 'axios'
import { useRef } from "react"
import {Container } from "react-bootstrap"

export default function Signup() {

    const userRef = useRef()
    const emailRef = useRef()
    const pwdRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
        const user = {
            username: userRef.current.value,
            email: emailRef.current.value,
            password: pwdRef.current.value
        }

            await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/signup/`, user,
            {
            headers: { 'Content-Type': 'application/json' }
            },
            {
                withCredentials: true
            })
            window.location.href = '/login' 
            //use router push rather than href

    }

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <Container style={{ maxWidth: '700px' }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" ref={userRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref= {pwdRef} required />
                </Form.Group>
                <div className="mt-2 d-flex justify-content-center">
                    <Button type="submit" variant="secondary">Login</Button>
                </div>
            </Form>
    </Container>
    </div>
    )
}
