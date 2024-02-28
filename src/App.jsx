import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './components/Login';
import { Container } from 'react-bootstrap'
import Logout from './components/Logout';
import Signup from './components/Signup'

function App() {

  // fetch('localhost:8000/cats')


  return (
    <BrowserRouter>
      <NavBar />
      <Container className='mt-5'>
        <Routes>   
            <Route path='/' /> 
            <Route path='/login' element={ <Login /> } />
            <Route path='/logout' element={ <Logout /> } />
            <Route path='/signup' element={ <Signup /> } />


        </Routes>
      </Container>
    </BrowserRouter>

  )
}

export default App;
