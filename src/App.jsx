import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './components/Login';
import { Container } from 'react-bootstrap'
import Logout from './components/Logout';
import Signup from './components/Signup'
import './App.css'
// import LegalDictionary from './pages/LegalDictionary';
import HomePage from './pages/HomePage';
// import { useState, useEffect } from 'react';
// import axios from 'axios'
import Happyclients from './pages/Happyclients';
import SinglePage from './pages/SinglePage';
import EditProfile from './components/EditProfile';
import NewProfileModal from './components/NewProfileModal';
import Footer from './components/Footer';
import Contact from './components/Contact';
import SecondPart from './components/SecondPart';
import Teams from './components/Teams';


function App() {


  // const [user, setUser] = useState()
  // const [loading, setLoading] = useState(true)

  // async function getUser() {
  //   try {
  //     // Fetch access token from local storage
  //     const accessToken = localStorage.getItem('access_token')
  //     if (accessToken) {
  //       // Include access token in request headers
  //       const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/current_user/`, {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  //       setUser(response.data);
  //       setLoading(false)
  //     } else {
  //       setLoading(false) // No access token found
  //     }
  //   } catch (error) {
  //     console.error('Error fetching current user:', error);
  //     setLoading(false)
  //   }
  // };

  // useEffect(() => {
    // getUser()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])


  return (
    <BrowserRouter>
      <header id='header'>
        <NavBar />
      </header>
      <Container className='mt-5'>
        <Routes>   
            <Route path='/' element={ <HomePage /> } /> 
            <Route path='/login' element={ <Login /> } />
            <Route path='/logout' element={ <Logout /> } />
            <Route path='/signup' element={ <Signup /> } />
            <Route path='/people/:id' element={ <SinglePage />}/>
            <Route path='/whoweare' element={ <SecondPart /> } />
            <Route path='/ourteam' element={ <Teams /> } />
            <Route path='/happyclients' element={ <Happyclients /> } />
            <Route path='/contactus' element={ <Contact /> }/>
            <Route path="/people/:id/edit" element={<EditProfile />} />
            <Route path="/people/add" element={<NewProfileModal />} />
            {/* <Route path='/legaldictionary' element={ <LegalDictionary /> } />  */}
        </Routes>
      </Container>
      
      <footer id="footer">
        <Footer />
      </footer>
    </BrowserRouter>

  )
}

export default App;
