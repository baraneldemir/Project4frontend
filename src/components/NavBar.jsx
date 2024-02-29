import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from 'react'
import { Link } from "react-router-dom"

export default function NavBar() {
    const [isAuth, setIsAuth] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('access_token') !== null) {
            setIsAuth(true)
        }      
    }, [isAuth])

    return (


        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
      <Navbar.Brand  as={Link} to="/">HELLOWORLD LAW</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuth ? (
                        <Nav.Link as={Link} to='logout/'>LOGOUT</Nav.Link>
                    ) : (
                        <>
                            <Nav.Link as={Link} to='login/'>LOGIN</Nav.Link>
                            <Nav.Link as={Link} to='signup/'>SIGNUP</Nav.Link>
                        </>
                    )
                    }
                    <Nav.Link as={Link} to='aboutus/'>WHO WE ARE</Nav.Link>
                    <Nav.Link as={Link} to='contactus/'>OUR SOLICITORS</Nav.Link>
                    <Nav.Link as={Link} to='legalconsultancy/'>WHAT WE DO</Nav.Link>
                    <Nav.Link as={Link} to='legalconsultancy/'>HAPPY CLIENTS</Nav.Link>
                    <Nav.Link as={Link} to='legalconsultancy/'>RESOURCES</Nav.Link>
                    <Nav.Link as={Link} to='contactus/'>CONTACT US</Nav.Link>
                    <Nav.Link as={Link} to='legaldictionary/'>LEGAL DICTIONARY</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}