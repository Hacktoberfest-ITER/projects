import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar'
import Openingpage from './Components/Openingpage';
import Openingpage2 from './Components/Openingpage2';
import Service from './Components/Service'
import Contact from './Components/Contact'
import LoadingBar from 'react-top-loading-bar'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { useState } from 'react';
function App() {
  return (
       <Router>
         <LoadingBar
        color='#f11946'
        progress={100}
        height='0.6vh'/>
          <Navbar/>
          <Openingpage/>
          <Openingpage2/>
          <Switch>
            <Route  path="/Service.js"><Service/></Route>
            <Route  path="/Contact.js"><Contact/></Route>
          </Switch>
          <Footer/>
     </Router>
  );
}
export default App;