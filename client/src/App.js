import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { slide as Menu } from 'react-burger-menu';
import { Home, About, Register, Training, Contact, Four04 } from './pages';
import './App.css';

class App extends Component {
  state = {
    page: 'home'
  };
  render() {
    return (
      <React.Fragment>
        <Menu right>
          <a href='/' className='menu-item'>
            Home
          </a>
          <a href='/in-home-training' className='menu-item'>
            In-Home Training
          </a>
          <a href='/register' className='menu-item'>
            Register
          </a>
          <a href='/about' className='menu-item'>
            About
          </a>
          <a href='/contact' className='menu-item'>
            Contact
          </a>
        </Menu>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/in-home-training' component={Training} />
            <Route exact path='/contact' component={Contact} />
            <Route path='/home' component={Four04} />
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
