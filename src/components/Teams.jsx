import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react"
import { usePeople } from "../contexts/PeopleContext"
import { Button, Image } from 'react-bootstrap';
import { Link } from "react-router-dom"



// import { useParams } from 'react-router-dom';


export default function Teams() {

  const { peoples, getPeoples } = usePeople()
  const [isAuth, setIsAuth] = useState(false)
  // const [show, setShow] = useState(false);

  // const nameRef = useRef()
  //   const designationRef = useRef()
  //   const descriptionRef = useRef()
  //   const twitterRef = useRef()
  //   const linkedinRef = useRef()
  //   const imageRef = useRef()

  //   const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);
  // const { id } = useParams()


//   async function handleSubmit(e) {
//     e.preventDefault();
//     setShow(false)
//     const newProfile = {
//         name: nameRef.current.value,
//         designation: designationRef.current.value,
//         description: descriptionRef.current.value,
//         twitter: twitterRef.current.value,
//         linkedin: linkedinRef.current.value,
//         image: imageRef.current.value,
//         };
//     // eslint-disable-next-line no-unused-vars
//     try {
//         await axios.post(
//             `${process.env.REACT_APP_BACKEND_URL}/people/`,
//             newProfile,
//             {
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
//                 },
//             }
//         );
//         // Redirect or handle success
//         window.location.href = "/";
//     } catch (error) {
//         // Handle error
//         console.error('Error creating profile:', error);
//     }
// }




  /////

  
  useEffect(() => {
    if(localStorage.getItem('access_token') !== null) {
      setIsAuth(true)
    }
    getPeoples()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuth])

  return (
    <>
    <section id='teams' className='block teams-block'>
        <Container fluid >
          
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
                    )
                    }

                <div className='subtitle'>some of our experts</div>
            </div>
      <Row>
        {
          peoples?.map(person => {
            return (
              /////////////




              // <TeamsCard
              // key={people.id}
              // id={people.id}
              // name={people.name}
              // description={people.description}
              // twitter={people.twitter}
              // linkedin={people.linkedin}
              // designation={people.designation}
              // people={people.image}
              // />       


              /////////////
              <Col sm={3} key={person.id}>
                <div className='image'>
                  <Image src={person.image} style={{ height: '23vh' }}/>
                  <div className='overlay'>
                  <Link to={`/people/${person.id}`} style={{ textDecoration: 'none' }}><Button style={{marginTop: '2vh',marginLeft: '10vh'}}>Detail</Button></Link>  
                    <div className='socials'>
                      <ul>
                        <li><a href={person.twitter}><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href={person.twitter}><i class="fab fa-twitter"></i></a></li>
                        <li><a href={person.linkedin}><i class="fab fa-linkedin-in"></i></a></li>
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
            )
          })
        }
      </Row>
    </Container>
    </section>

    {/* <Modal show={show} onHide={handleClose} style={{marginTop: '10vh'}}>
    <Form onSubmit={handleSubmit}>
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
        <Form.Control type="text" ref={descriptionRef} required />
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
    </Modal> */}

    </>
  )
}
