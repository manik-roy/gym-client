import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Pricing from './components/Pricing/Pricing';
import MemberShip from './components/MemberShip/MemberShip';

function App() {
  return (
    <div>
     <Router>

       <Switch>

        <Route exact path='/' component={Home} />

        <Route path='/pricing' component={Pricing} />

        <Route path='/membership' component={MemberShip} />
       </Switch>

     </Router>
    </div>
  );
}

export default App;
