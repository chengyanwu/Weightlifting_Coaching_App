
import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import RecordSnatch from './pages/record-snatch'
import Selection from './pages/selection'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/snatch/:drill'>
          <RecordSnatch/>
        </Route>
        {/**no route for cleans yet */}
        <Route path='/'>
          <Selection/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
