import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Symptome from "./pages/Symptome.jsx";
import Medikamente from "./pages/Medikamente.jsx";
import Termine from "./pages/Termine.jsx";
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
      </Routes>

      <Footer />
    </div>
  );
}
export default App;
