import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import { usePeople } from "../contexts/PeopleContext";
import { Button, Image } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Teams() {
  const { peoples, getPeoples } = usePeople();
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if(localStorage.getItem('access_token') !== null) {
      setIsAuth(true);
    }
    getPeoples();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth]);

  return (
    <>
      <section id='teams' className='block teams-block'>
        <Container fluid>
          <div className='title-holder'>
            <h2>Our Teams</h2>
            {isAuth ? (
              <>
                <Link to='/people/add'><Button variant="primary">Create Profile</Button></Link>
              </>
            ) : (
              <>
                &nbsp;
                <h6>Please login to see our team</h6>
                <Link to='/login'><Button variant="primary">Create Profile</Button></Link>
              </>
            )}
            <div className='subtitle'>some of our experts</div>
          </div>
          <Row>
            {peoples?.map(person => (
              <Col sm={3} key={person.id}>
                <div className='image' style={{ height: '23vh', width: '100%', overflow: 'hidden' }}>
                  <Image src={person.image} style={{ height: '100%', width: '100%', objectFit: 'cover' }}/>
                  <div className='overlay'>
                    <Link to={`/people/${person.id}`} style={{ textDecoration: 'none' }}>
                      <Button style={{ marginTop: '2vh', marginLeft: '10vh' }}>Detail</Button>
                    </Link>  
                    <div className='socials'>
                      <ul>
                        <li><a href={person.twitter}><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href={person.twitter}><i className="fab fa-twitter"></i></a></li>
                        <li><a href={person.linkedin}><i className="fab fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='content'>
                  <h3>{person.name}</h3>
                  <span className='designation'>{person.designation}</span>
                  <p>{person.description}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
