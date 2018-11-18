import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import Axios from 'axios';
import './Contact.css';

class Contact extends Component {
  state = {
    email: '',
    message: ''
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    Axios.post('/contact-form', {
      email: this.state.email,
      message: this.state.message
    })
      .then((res, status) => {
        console.log(res, status);
        this.setState({ email: '', message: '' });
        const sent = document.getElementById('sent');
        sent.className = 'sent-active';
        setTimeout(() => {
          sent.className = 'sent-inactive';
        }, 4000);
      })
      .catch(err => {
        console.log(err);
        this.setState({ email: '', message: '' });
        const sent = document.getElementById('sent');
        sent.className = 'sent-active';
        setTimeout(() => {
          sent.className = 'sent-inactive';
        }, 4000);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Jumbotron img={'img/stay.jpg'} text={'Contact'} />
        <div className='contact-me'>
          <div className='contact-text'>
            <h3>Contact Me</h3>
            <br />
            <p>Shelley Harrison</p>
            <a href='mailto:shelley@makingfetchhappenboston.com'>
              Shelley@MakingFetchHappenBoston.com
            </a>
            <p>(781) 613-0539</p>
            <p>Making Fetch Happen LLC</p>
            <p>Jamaica Plain, MA</p>
          </div>
          <img src='img/fetch_black.png' alt='logo' />
        </div>
        <h1 id='sent' className='sent-inactive'>
          Message Sent
        </h1>
        <form className='message-form' onSubmit={this.handleSubmit}>
          <label>
            Your Email:
            <input
              name='email'
              type='text'
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name='message'
              value={this.state.message}
              cols='30'
              rows='10'
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </React.Fragment>
    );
  }
}

export default Contact;
