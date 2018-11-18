import React, { Component } from 'react';
import './About.css';
import Jumbotron from '../../components/Jumbotron/Jumbotron';

class About extends Component {
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
        <Jumbotron img={'img/thethree.jpg'} text={'About'} />
        <div className='about'>
          <img
            className='about-photo'
            src={'/img/everyone.jpg'}
            alt='shelley-pic'
          />
          <div className='text-here'>
            <h1>My Story</h1>
            <p className='about-text'>
              My husband and I adopted our first dog, a Shiba Inu, Llewey, about
              ten years ago, followed quickly by his brother Bran. A year and a
              half later, we added a foster-fail, Mrs. Moo, to our family.
              Needless to say, my pack needed a lot of training and enrichment,
              which is how we ended up training at the MSPCA.
            </p>
            <p className='about-text'>
              In 2015, I began to volunteer at the MSPCA, which is where I fell
              in love with training and behavior. Over the next three years, I
              traveled around the country, attending as many classes and
              seminars as I could from the greats including,{' '}
              <a href='http://www.behaviorworks.org/'>Dr. Susan Friedman</a>,{' '}
              <a href='http://animalbehaviorclinic.net/'>Dr. Chris Pachel</a>,
              Ken Ramierz, and many more. I also completed the Applied Behavior
              Analysis curriculum through the Florida Institute of Technology (a
              far cry from my Classics degree from Smith College).
            </p>
            <p className='about-text'>
              I also began to regularly deploy as a partner responder to
              shelters run by ASPCA and the The Humane Society of the United
              States, where I helped care for different populations of dogs
              ranging from dogs confiscated in dog fighting cases to the{' '}
              <a href='https://patch.com/new-hampshire/concord-nh/75-abused-nh-great-danes-get-second-chance-life'>
                Great Danes of New Hampshire
              </a>
              .
            </p>
            <p className='about-text'>
              As for my pack, Bran and I travel around the country competing in
              Nosework competitions and in October of 2017, we got our{' '}
              <a href='http://www.nacsw.net/titlesdescriptions/title-parameters-nw3'>
                NW3 | NACSW
              </a>
              ). Mrs. Moo and I are working together to complete my KPA
              certification through the{' '}
              <a href='https://karenpryoracademy.com/courses/dog-trainer-professional/'>
                {' '}
                Karen Pryor Academy
              </a>
              . I’m also a supporting member of the{' '}
              <a href='http://iaabc.org/'>IAABC</a>.
            </p>
            <p className='about-text'>
              Llewey enjoys going into whatever pub will allow dogs.{' '}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
