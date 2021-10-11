import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import Openingpage from './Components/Openingpage';
import Openingpage2 from './Components/Openingpage2';
// import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
     <div className="app">
       <Navbar/>
       <Openingpage/>
       <Openingpage2/>
       <Footer/>
     </div>
  );
}
export default App;