import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import './Training.css';

class Training extends Component {
  state = {};
  render() {
    return <Jumbotron text='In-Home Training' img={'img/puppies.jpg'} />;
  }
}

export default Training;
