import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './components/Login';
import { Container } from 'react-bootstrap'
import Logout from './components/Logout';
import Signup from './components/Signup'
import './App.css'
import LegalDictionary from './pages/LegalDictionary';
import HomePage from './pages/HomePage';


function App() {

  // fetch('localhost:8000/cats')


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
            <Route path='/legaldictionary' element={ <LegalDictionary /> } /> 
        </Routes>
      </Container>
    </BrowserRouter>

  )
}

export default App;
