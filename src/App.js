import React from 'react';
import '../src/styles/App.css';
import '../src/components/pages/Home.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';

function App() {
  return (
    <>
      <Router basename="/MyFitnessLog">
        <Switch>
          <Route path='/' exact component={Home}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
