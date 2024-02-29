import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Teams() {
  return (
    <section id='teams' className='block teams-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>Our Teams</h2>
                <div className='subtitle'>some of our experts</div>
            </div>
      <Row>
        <Col sm={3}>
          <div className='image'>
            Image
            <div className='overlay'>
              <div className='socials'>
                <ul><a href="http://linkedin.com">FB icon</a></ul>
                <ul><a href="http://linkedin.com">Twitter icon</a></ul>
                <ul><a href="http://linkedin.com">Linkedin icon</a></ul>
              </div>
            </div>
          </div>
          <div className='content'>
            <h3>Name</h3>
            <span className='designation'>designation</span>
            <p>Description</p>
          </div>
        </Col>
      </Row>
    </Container>
    </section>
  )
}
