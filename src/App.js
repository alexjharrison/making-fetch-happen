import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Footer from "./components/Footer";
import Header from "./components/Header";


class App extends Component {
  render() {
    return (
      <div className="App">
        <React.Fragment>
          <Router>
            <Header />

            {/* <Footer /> */}

          </Router>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
