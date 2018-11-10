import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <React.Fragment>
            <Header />
            {/* <Footer /> */}
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
