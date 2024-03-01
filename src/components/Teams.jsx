import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect } from "react"
import { usePeople } from "../contexts/PeopleContext"
import { Button, Image } from 'react-bootstrap';

export default function Teams() {

  const { peoples, getPeoples } = usePeople()

  
  useEffect(() => {
    console.log(peoples)
    getPeoples()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id='teams' className='block teams-block'>
        <Container fluid>
            <div className='title-holder'>
                <h2>Our Teams</h2>
                <div className='subtitle'>some of our experts</div>
            </div>
      <Row>
        {
          peoples?.map(people => {
            return (
              <Col sm={3} key={people.id}>
                <div className='image'>
                  <Image src={people.image} />
                  <div className='overlay'>
                  <Button style={{marginTop: '2vh',marginLeft: '10vh'}}>Detail</Button>
                    <div className='socials'>
                      <ul>
                        <li><a href={people.twitter}><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href={people.twitter}><i class="fab fa-twitter"></i></a></li>
                        <li><a href={people.linkedin}><i class="fab fa-linkedin-in"></i></a></li>
                      </ul>
                    </div>
                    
                  </div>
                </div>
                <div className='content'>
                  <h3>{people.name}</h3>
                  <span className='designation'>{people.designation}</span>
                  <p>{people.description}</p>
                </div>
              </Col>
            )
          })
        }
      </Row>
    </Container>
    </section>
  )
}
