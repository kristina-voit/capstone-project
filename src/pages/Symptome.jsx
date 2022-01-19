import Header from "../components/Header/Header.jsx";
import Graph from "../components/Symptoms/MoodGraph"
import Search from "../components/Symptoms/Search/Search"




const Symptome = () => {
  return (
    <div>
      <Header />
      <h1>Stimmung & Symptome</h1>
      <Graph />
      <h1>Neuer Eintrag</h1>
      <Search />
    </div>
  );
};
export default Symptome;



