import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './components/Login';
import { Container } from 'react-bootstrap'
import Logout from './components/Logout';
import Signup from './components/Signup'
import './App.css'
import LegalDictionary from './pages/LegalDictionary';
import HomePage from './pages/HomePage';
// import { useState, useEffect } from 'react';
// import axios from 'axios'
import WhowearePage from './pages/WhowearePage';
import Ourteam from './pages/Ourteam';
import Happyclients from './pages/Happyclients';
import SinglePage from './pages/SinglePage';


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
            <Route path='/peoples/:id' element={ <SinglePage />}/>
            <Route path='/whoweare' element={ <WhowearePage /> } />
            <Route path='/ourteam' element={ <Ourteam /> } />
            <Route path='/whatwedo' element={ <Signup /> } />
            <Route path='/happyclients' element={ <Happyclients /> } />
            <Route path='/resources' element={ <Signup /> } />
            <Route path='/contactus' element={ <Signup /> } />
            <Route path='/legaldictionary' element={ <LegalDictionary /> } /> 
        </Routes>
      </Container>
    </BrowserRouter>

  )
}

export default App;
