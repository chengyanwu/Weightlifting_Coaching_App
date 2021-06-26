import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Record from './pages/record'

const App = () => {
  return (
    <Router> {/**will add more routes later */}
      <Switch>
        <Route path='/'>
          <Record/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;

/**write functions in pages/record.js to give visual cues for snatch starting + extension */