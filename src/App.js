import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Contact, Home, Lessons, Sitting, Four04 } from "./pages";


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Contact" component={Contact} />
            <Route exact path="/Sitting" component={Sitting} />
            <Route exact path="/Lessons" component={Lessons} />
            <Route exact path="/About" component={About} />
            <Route component={Four04} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
