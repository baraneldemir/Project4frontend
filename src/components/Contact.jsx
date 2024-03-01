
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function Contact() {
return (
<section id="contact" className="block contact-block">
<Container style={{backgroundImage: 'url(https://img.freepik.com/free-photo/gray-color-cotton-texture-surface-background_74190-13729.jpg)'}}>
    <Container fluid style={{padding: '5vh'}}>
    <div className="title-holder">
        <h2>Contact us now</h2>
        <div className="subtitle">We usually reply within a few weeks</div>
    </div>
    <Form className='contact-form'>
        <Row>
        <Col sm={4}>
            <Form.Control type="text" placeholder="Enter your full name" required />
        </Col>
        <Col sm={4}>
            <Form.Control type="email" placeholder="Enter your email address" required />
        </Col>
        <Col sm={4}>
            <Form.Control type="tel" placeholder="Enter your contact number" required />
        </Col>
        </Row>
        <Row>
        <Col sm={12}>
            <Form.Control as="textarea" placeholder="Enter your contact message" required />
        </Col>
        </Row>
        <div className='btn-holder'>
        <Button type="submit">Submit</Button>
        </div>
    </Form>
    </Container>
    <div className='google-map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14048.211570060965!2d-0.1228208876550775!3d51.505942908931324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1481805868782"></iframe>
    </div>
    <Container fluid style={{padding: '5vh'}} >
    <div className='contact-info'>
        <ul>
        <li>
            <i className="fas fa-envelope"></i>
            HelloWorld@helloworld.com
        </li>
        <li>
            <i className="fas fa-phone"></i>
            07779776644
        </li>
        <li>
            <i className="fas fa-map-marker-alt"></i>
            London, United Kingdom
        </li>
        </ul>
    </div>
    </Container>
    </Container>
</section>
);
}