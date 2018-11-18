import React, { Component } from 'react';
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import "./Register";

class Register extends Component {
  state = {
    username: '',
    email: '',
    phone: '',
    training: 'nosework',
    behaviors: '',
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
    console.log(this.state);
  }
  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      username: '',
      email: '',
      phone: '',
      training: 'nosework',
      behaviors: ''
    })
    console.log("submitted");
  }
  render() {
    return (
      <div className="register">
        <Jumbotron img={"img/mooputer.jpg"} text={"Register"} />
        <br />
        <form className='message-form' onSubmit={this.handleSubmit}>
          <label>
            Name*:
            <input
              name='username'
              type='text'
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Email*:
            <input
              name='email'
              type='text'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              name='phone'
              type='text'
              value={this.state.phone}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Type of Training:
            <select
              name='training'
              value={this.state.training}
              onChange={this.handleChange}
            >
              <option value="nosework">Nosework</option>
              <option value="obedience">Obedience</option>
              <option value="puppy">Puppy</option>
              <option value="other">Other</option>
            </select>
          </label><br /><br />
          <label>
            What are the top behaviors that you're looking to address*?
            <textarea
              name='behaviors'
              value={this.state.behaviors}
              cols='30'
              rows='10'
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default Register;
