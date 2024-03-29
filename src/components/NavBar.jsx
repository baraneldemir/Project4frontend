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
      {/* <Nav.Link style={{paddingRight: '-30vh'}} as={Link} to="/">
                    <img
                      src={logo}
                      width="80vh"
                      className="d-inline-block align-top"
                      alt="Logo"
                    />
      </Nav.Link> */}
      <Navbar.Brand  as={Link} to="/">HELLOWORLD LAW</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {isAuth ? (
                        <>
                        <Nav.Link as={Link} to='whoweare/'>WHO WE ARE</Nav.Link>
                        <Nav.Link as={Link} to='ourteam/'>OUR SOLICITORS</Nav.Link>
                        <Nav.Link as={Link} to='happyclients/'>HAPPY CLIENTS</Nav.Link>
                        {/* <Nav.Link href="#contactus">CONTACT US</Nav.Link> */}
                        <Nav.Link as={Link} to='contactus/'>CONTACT US</Nav.Link>
                        <Nav.Link as={Link} to='legaldictionary/'>LEGAL DICTIONARY</Nav.Link>
                      
                        <Nav.Link as={Link} to='legal/'>|</Nav.Link>
                      
    
                        
                        <Nav.Link as={Link} to='logout/'>LOGOUT</Nav.Link>
                        </>
                    ) : (
                        <>
                        <Nav.Link as={Link} to='signup/'>WHO WE ARE</Nav.Link>
                        <Nav.Link as={Link} to='signup/'>OUR SOLICITORS</Nav.Link>
                        <Nav.Link as={Link} to='signup/'>HAPPY CLIENTS</Nav.Link>
                        {/* <Nav.Link href="#contactus">CONTACT US</Nav.Link> */}
                        <Nav.Link as={Link} to='signup/'>CONTACT US</Nav.Link>
                        <Nav.Link as={Link} to='signup/'>LEGAL DICTIONARY</Nav.Link>
                        &nbsp;
                        &nbsp;
                        <Nav.Link>|</Nav.Link>
                        
                        <Nav.Link as={Link} to='login/'>LOGIN</Nav.Link>
                        <Nav.Link as={Link} to='signup/'>SIGNUP</Nav.Link>
                        </>
                    )
                    }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}