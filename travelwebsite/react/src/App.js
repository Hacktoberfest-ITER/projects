import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import Openingpage from './Components/Openingpage';
import Openingpage2 from './Components/Openingpage2';
import Service from './Components/Service'
import Contact from './Components/Contact'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
       <Router>
          <Navbar/>
          <Openingpage/>
          <Openingpage2/>
          <Switch>
            <Route path="/Service.js"><Service/></Route>
            <Route path="/Contact.js"><Contact/></Route>
          </Switch>
          <Footer/>
     </Router>
  );
}
export default App;