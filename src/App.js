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
import Classes from './components/Classes/Classes';
import Details from './components/Classes/Details';
function App() {
  return (
    <div>
      <Router>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/pricing' component={Pricing} />
          <Route exact path='/classes' component={Classes} />
          <Route path='/classes/:id' component={Details} />
          <Route path='/membership' component={MemberShip} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
// api https://bdgym.herokuapp.com/api/v1/price