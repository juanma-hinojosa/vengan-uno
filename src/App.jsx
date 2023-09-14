import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent'
import  Home  from "../src/pages/home";
import  About  from "../src/pages/about";
import FooterComponent from './components/FooterComponent';
import Estrenos from './pages/estrenos';
import Episodio from './pages/episodio';


function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route exact path='/' element={<Home /> } />
        <Route path='/about' element={<About />} />
        <Route path='/episodios' element={<Estrenos />} />
        <Route path='/episodios/:id' element={<Episodio />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
