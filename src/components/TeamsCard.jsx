// import React from 'react'
// import Col from 'react-bootstrap/Col';
// import { Button, Image } from 'react-bootstrap';
// import { Link } from "react-router-dom"
// import { useEffect } from "react"
// import { usePeople } from "../contexts/PeopleContext"


// export default function TeamsCard(id, key, name, designation, description, twitter, linkedin, image) {
//     const { person, getPeople} = usePeople()

//     useEffect(() => {

//         if (person) {
//            getPeople(id)
//         }
//       // eslint-disable-next-line react-hooks/exhaustive-deps
//       }, [person]);
//   return (
//     <Col sm={3} key={id}>
//                 <div className='image'>
//                   <Image src={image} />
//                   <div className='overlay'>
//                   <Link to='ourteam/' style={{ textDecoration: 'none' }}><Button style={{marginTop: '2vh',marginLeft: '10vh'}}>Detail</Button></Link>  
//                     <div className='socials'>
//                       <ul>
//                         <li><a href={twitter}><i class="fab fa-facebook-f"></i></a></li>
//                         <li><a href={twitter}><i class="fab fa-twitter"></i></a></li>
//                         <li><a href={linkedin}><i class="fab fa-linkedin-in"></i></a></li>
//                       </ul>
//                     </div>
                    
//                   </div>
//                 </div>
//                 <div className='content'>
//                   <h3>{name}</h3>
//                   <span className='designation'>{designation}</span>
//                   <p>{description}</p>
//                 </div>
//     </Col>
//   )
// }



export default function TeamsCard() {
  return (
    <div>TeamsCard</div>
  )
}

