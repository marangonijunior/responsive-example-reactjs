import React, { Component } from 'react';
import { Carousel, Button, Image } from 'react-bootstrap'

import './slider.scss';

import schoolImg from '../../assets/school.jpg';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Carousel className="slider" data-test="slider">
            <Carousel.Item>
              <Image src={schoolImg} fluid/>
              <Carousel.Caption>
                  <h1>All Saints C of E First School & Busy Bees Pre-School</h1>
                  <p>
                    <Button variant="primary">FIND OUT MORE</Button>
                  </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={schoolImg} fluid/>
              <Carousel.Caption>
                  <h1>All Saints C of E First School & Busy Bees Pre-School</h1>
                  <p>
                    <Button variant="primary">FIND OUT MORE</Button>
                  </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={schoolImg} fluid/>
              <Carousel.Caption>
                  <h1>All Saints C of E First School & Busy Bees Pre-School</h1>
                  <p>
                    <Button variant="primary">FIND OUT MORE</Button>
                  </p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
  }
}

export default Slider;