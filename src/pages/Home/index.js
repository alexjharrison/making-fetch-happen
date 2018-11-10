import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { NavLink } from 'react-router-dom';
import './home.css';

class Home extends Component {
  state = {};
  componentDidMount() {
    // console.log('hi');
  }
  render() {
    return (
      <div className='home'>
        <Jumbotron img={'img/grass.jpg'} text={'Making Fetch Happen'} />
        <h1 className='headline'>
          Take a science-based, positive approach to training and enrichment
          from the comfort of your own home.
        </h1>
        <div className='cards'>
          <div className='nosework'>
            <h2>Nosework</h2>
            <img src={'img/dane.jpg'} alt='great dane' />
            <p>
              Nosework is a canine sport created to mimic professional detection
              dog tasks (drugs, bomb detection), and is quickly gaining
              popularity. It’s fun for dogs of all ages and temperaments!
            </p>
          </div>
          <div className='obedience'>
            <h2>Obedience</h2>
            <img src={'img/sniff.jpg'} alt='great dane' />
            <p>
              Does your dog exhibit behaviors that you’d like to change?
              Obedience is a fun way to bond with your dog, and can help you
              guide them towards behaviors that better fit your lifestyle.
            </p>
          </div>
          <div className='puppy'>
            <h2>Puppy</h2>
            <img src={'img/puppies.jpg'} alt='great dane' />
            <p>
              There’s so much information out there on how to raise a puppy
              right, and it can be overwhelming. We’ll work together to create
              an action plan to get your puppy started on the right path.{' '}
            </p>
          </div>
        </div>
        {/* <div className='more-info'> */}
        <NavLink className='more-info' to='/in-home-training'>
          <span className='more-info-text'> MORE INFO</span>
        </NavLink>
        {/* </div> */}
        <hr />
        <p className='testimonial'>
          “Nosework was a great way for my dog to get out all that excess energy
          after the baby was born when we weren’t able to take our usual long
          walks.” - Tony’s Mom
        </p>
      </div>
    );
  }
}

export default Home;
