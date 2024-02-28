import { Nav, Navbar, Container } from "react-bootstrap";

export default function NavBar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Django Auth in React</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href='login/'>Login</Nav.Link>
            </Nav>
        </Navbar>
);
}