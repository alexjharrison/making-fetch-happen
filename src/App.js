import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { Home, About, Register, Training, Contact } from './pages';
import './App.css';

class App extends Component {
  state = {
    page: 'home'
  };
  render() {
    return (
      <div className='App'>
        <Header />
        <Switch>
          <Route exact path='/home' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/in-home-training' component={Training} />
          <Route exact path='/contact' component={Contact} />
          <Route path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
