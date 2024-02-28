import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';

function App() {

  // fetch('localhost:8000/cats')


  return (
    <BrowserRouter>
      <NavBar />
      <Routes>   
          <Route path='/' /> 
      </Routes>
    </BrowserRouter>

  )
}

export default App;
