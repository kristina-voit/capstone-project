import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Symptome from "./pages/symptome.jsx";
import Medikamente from "./pages/medikamente.jsx";
import Termine from "./pages/termine.jsx";
import NeuerTermin from "./pages/neuertermin.jsx";
import NeuesMedikament from "./pages/neuesmedikament.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/symptome" element={<Symptome />} />
        <Route path="/medikamente" element={<Medikamente />} />
        <Route path="/termine" element={<Termine />} />
        <Route path="/neuertermin" element={<NeuerTermin />} />
        <Route path="/neuesmedikament" element={<NeuesMedikament />} />
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
