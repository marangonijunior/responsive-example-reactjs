import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'

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
        <Carousel className="slider">
            <Carousel.Item>
              <Image src={schoolImg} fluid/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={schoolImg} fluid/>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={schoolImg} fluid/>
            </Carousel.Item>
        </Carousel>
    );
  }
}

export default Slider;