//import { useState } from 'react'
import logo from './statusbar.svg'
import styled from 'styled-components'
import './App.css'
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/home.jsx"
import Symptome from "./pages/symptome.jsx"
import Medikamente from "./pages/medikamente.jsx"
import Termine from "./pages/termine.jsx"
//import Navbar from './components/navbar';
import TermineIcon from './images/doctor.svg'
import HomeIcon from './images/home.svg'
import MedikamenteIcon from './images/medicine.svg'
import SymptomeIcon from './images/symptoms.svg'

function App() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const weekday = ["Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag"];
  let day = weekday[current.getDay()];
  
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="Statusbar" alt="logo" />
        <h1>{day}, {date}</h1>
        <p>Kristina, wie geht es Dir heute?</p>
      </header>



      <footer>
  <NavbarStyled>
      <NavLink to="/"><img className="home" src={HomeIcon}/><p>Home</p></NavLink>
        <NavLink to="symptome"><img className="symptome" src={SymptomeIcon}/><p>Symptome</p></NavLink>
        <NavLink to="medikamente"><img className="medikamente" src={MedikamenteIcon}/><p>Medikamente</p></NavLink>
        <NavLink to="termine"><img className="termine" src={TermineIcon}/><p>Termine</p></NavLink>
        </NavbarStyled>
      </footer>

{/* <Routes>
        <Route path="/" element={<h1>Hi there!</h1>} />
        <Route path="home" element={<Home />} />
        <Route path="symptome" element={<Symptome />} />
        <Route path="medikamente" element={<Medikamente />} />
        <Route path="termine"  />
      </Routes>
*/}



    </div>

  )
}


export default App

const NavbarStyled = styled.footer`
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  transform: translateY(0);
  `










//  const [count, setCount] = useState(0)
/*     <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>*/

