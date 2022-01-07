//import { useState } from 'react'
import logo from './statusbar.svg'
import './App.css'
import { Route, Routes, NavLink } from "react-router-dom";
import Home from "./pages/home.jsx"
import Symptome from "./pages/symptome.jsx"
import Medikamente from "./pages/medikamente.jsx"
import Termine from "./pages/termine.jsx"


function App() {


  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="Statusbar" alt="logo" />
        <h1>Welcome to VitaMed</h1>
      </header>

      <footer>
        <NavLink to="/">Home </NavLink>
        <NavLink to="symptome">Symptome </NavLink>
        <NavLink to="medikamente">Medikamente </NavLink>
        <NavLink to="termine">Termine </NavLink>
      </footer>

      <Routes>
        <Route path="/" element={<h1>Hi there!</h1>} />
        <Route path="home" element={<Home />} />
        <Route path="symptome" element={<Symptome />} />
        <Route path="medikamente" element={<Medikamente />} />
        <Route path="termine" element={<Termine />} />
      </Routes>



    </div>

  )
}


export default App










//  const [count, setCount] = useState(0)
/*     <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>*/

