import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import { Link } from 'react-router-dom';
import './Training.css';

class Training extends Component {
  state = {
    style: {
      opacity: .1,
      transform: "translateY(30px)",
      transition: "all 2s"
    }
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        style: {
          opacity: 1,
          transform: "translateY(0px)",
          transition: "all 900ms ease-out"
        }
      });
    }, 100);
  }
  render() {
    return (
      <div style={this.state.style}>
        <Jumbotron text='In-Home Training' img={'img/puppies.jpg'} />
        <div className='training'>
          <div className='intro'>
            <h3>Services</h3>
            <p>
              Below is an overview of the services we offer to folks located in
              the greater Boston area. If there is something else that you are
              interested in that you don’t see below, please feel free to reach
              out to us at{' '}
              <a href='mailto:shelley@makingfetchhappenboston.com'>
                shelley@makingfetchhappenboston.com
              </a>
              .{' '}
            </p>
          </div>
          <div className='training-info right'>
            <img src={'img/ribbon.jpg'} alt='ribbon-dog' />
            <div className='training-text'>
              <h1>Nosework</h1>
              <p>
                Does your dog love to stop and smell the flowers (and possibly
                much more)? Well, now you can put that skill to work.
              </p>
              <p>
                What is nosework, you ask? Nosework is a canine sport created to
                mimic professional detection dog tasks (bomb detection, medical
                alert, drug detection) and is quickly gaining popularity across
                the country. In short, you and your dog work together to find a
                hidden odors (essential oil of birch, anise and clove).
              </p>
              <p>
                It’s a great way for dogs to burn energy, while having fun and
                bonding with their owners. The wonderful thing about nosework is
                that it’s a fun activity for all types of dogs- young/old,
                rambunctious/shy, dogs with tons of training/dogs with no
                training.
              </p>
            </div>
          </div>
          <Link to='/register' className='register-button'>
            Sign Up
          </Link>
          <hr />
          <div className='training-info left'>
            <div className='training-text'>
              <h1>Obedience</h1>
              <p>
                While many people think that obedience may not be the most
                exciting thing to learn, it is, without a doubt, one of the most
                useful things you can teach your dog. Obedience is more than sit
                and stay. You’re providing your dog with an entire repertoire
                that they can pull from in order to help them get what they want
                in a way that that you can live with.
              </p>
              <p>
                Does your dog jump on or bark at people when they come through
                the door? Let’s teach them to go to their mat when someone
                enters the room (yes…it can be done).
              </p>
              <p>
                We can work together to put together a specific training plan to
                meet the needs of you and your dog.
              </p>
            </div>
            <img src={'img/bone.jpg'} alt='bone-dog' />
          </div>
          <Link to='/register' className='register-button'>
            Sign Up
          </Link>
          <hr />
          <div className='training-info right'>
            <img src={'img/leaf.jpg'} alt='ribbon-dog' />
            <div className='training-text'>
              <h1>Puppy</h1>
              <p>So you brought your puppy home…what’s next?</p>
              <p>
                There are so many books and resources about puppies out there
                that it can be daunting- not to mention the (many times
                conflicting) advice that you’ve been receiving from friends,
                family members, co-workers, etc.
              </p>
              <p>
                We will work together to create a plan of action that is
                grounded in a scientifically-proven methodology, which will help
                set your puppy up for success later in life.
              </p>
              <p>
                Together, we’ll tackle basic obedience, manners, potty training,
                and much more.
              </p>
            </div>
          </div>
          <Link to='/register' className='register-button'>
            Sign Up
          </Link>
        </div>
      </div>
    );
  }
}

export default Training;
