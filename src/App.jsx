import './App.css'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx"
import Symptome from "./pages/symptome.jsx"
import Medikamente from "./pages/medikamente.jsx"
import Termine from "./pages/termine.jsx"
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'



function App() {
  
  return (

    <div className="App">
      
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="symptome" element={<Symptome />} />
        <Route path="medikamente" element={<Medikamente />} />
        <Route path="termine" element={<Termine />} />
      </Routes>
  
      <Footer/>

    </div>

  )
}
export default App