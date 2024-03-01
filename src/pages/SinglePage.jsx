import { usePeople } from "../contexts/PeopleContext"
import { useEffect, useState } from "react";
// import axios from 'axios'
import { useParams } from "react-router-dom";
import { Container, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function SinglePage() {
    const {person, getPeople, deletePeople} = usePeople()
    const { id } = useParams()
    const [isAuth, setIsAuth] = useState(false)

    function handleDelete() {
        deletePeople(id)
    }

    function handleEdit() {

    }

    useEffect(() => {
        if(localStorage.getItem('access_token') !== null) {
            setIsAuth(true)
        }  
        getPeople(id)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuth])


    return (
    <>
        <Container style={{backgroundColor: 'darkgrey'}}>
            <div className='title-holder' style={{paddingTop: '4vh'}}>
                <h2>ATTORNEY PROFILE</h2>
                {isAuth ? (
                    <>
                        <Button variant="primary" onClick={handleDelete}>Delete Profile</Button>
                        &nbsp;
                        <Link to={`/people/${id}/edit`}><Button variant="primary" onClick={handleEdit}>Edit Profile</Button></Link>
                    </>
                    ) : (
                        <>
                            <Link to='/login'><Button variant="primary" >Delete Profile</Button></Link>
                            &nbsp;
                            <Link to='/login'><Button variant="primary" onClick={handleEdit}>Edit Profile</Button></Link>
                        </>
                    )
                    }
                
            </div>
            <Container style={{backgroundColor: 'white', maxWidth: '80vh'}}>
                <Image src={person.image}/>
                <h2 style={{textAlign: 'center'}}>{person.name}</h2>
                <p style={{padding: '10vh', paddingTop: '3vh'}}>Most tenants do not understand their commercial lease. It is typically long, confusing, and filled with legal jargon. We help you understand your lease, so you can make informed decisions. This saves you time, money, and headache, allowing you to focus on running your business.</p>
            </Container>
            
        </Container>
    </>
)
}



   

    // const handleAddToCart = async () => {
    //     try {
    //       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/cart/add/`, cartItem, {
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    //         },
    //         })
    //       if (response.ok) {
    //         // Update the cart in products context
    //         addToCart(id, 1);
    //         console.log('Item added to cart successfully');
    //       } else {
    //         console.error('Failed to add item to cart');
    //       }
    //     } catch (error) {
    //       console.error('Error adding item to cart:', error);
    //     }
    //   };

    // const handleAddToList = async () => {
    //     try {
    //       const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/list/add/`, listItem, {
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    //         },
    //         })
    //       if (response.ok) {
    //         addToList(id, 1);
    //         console.log('Item added to wish successfully');
    //       } else {
    //         console.error('Failed to add item to wish list');
    //       }
    //     } catch (error) {
    //       console.error('Error adding item to wish list:', error);
    //     }
    //   };


//     useEffect(() => {
//       getSingleProduct(id)
//       setIsUpdated(false)
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [isUpdated])


//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundAttachment: "fixed",}}>
//         <Container>
//             <Row className="justify-content-md-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Body>
//                             <Card.Title>{product.name}</Card.Title>
//                             <Card.Text>{product.description}</Card.Text>
//                             <Card.Text>Price: {formattedPrice}</Card.Text>
//                             <Card.Text>Stock Left: {product.stock}</Card.Text>
//                         </Card.Body>
//                         <Card.Footer>
//                             <Button variant="primary" onClick={handleAddToCart} >Add to Cart</Button> &nbsp;
//                             <Button variant="primary" onClick={handleAddToList} >Wish List</Button> &nbsp;
//                             <Link to={'/products'} ><Button variant="secondary" >Back to Products</Button></Link>
//                         </Card.Footer>
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>        
//       </div>
//   );
// }