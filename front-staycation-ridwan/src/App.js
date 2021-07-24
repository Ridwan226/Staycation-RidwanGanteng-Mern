import React from 'react';
import './assets/scss/style.scss';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPages from './pages/LandingPages';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={LandingPages}></Route>
      </Router>
    </div>
  );
}

export default App;
