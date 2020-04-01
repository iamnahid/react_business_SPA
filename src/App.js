import React from 'react';
import './App.css';
import './assets/css/Nav.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Nbar from './components/Nbar.js';
import Services from './Services';
import Mission from './Mission';
import Team from './Team';
import Contact from './Contact'
import Footer from './components/footer.js'

function App() {
  return (
    <Router>
      <div>
        <Nbar />

        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/About'>
          <About/>
        </Route>        
        <Route path='/Mission'>
          <Mission/>
        </Route>
        <Route path='/Services'>
          <Services/>
        </Route>
        <Route path='/Team'>
          <Team/>
        </Route>
        <Route path='/Contact'>
          <Contact/>
        </Route>

        <Footer />
      </div>

    </Router>
  );
}

export default App;
