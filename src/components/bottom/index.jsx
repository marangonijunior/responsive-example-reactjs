import React, { Component } from 'react';
import { Navbar, Image, Col  } from 'react-bootstrap'

import socialImg from '../../assets/social.png';
import logoImg from '../../assets/site-logo.svg';

import './bottom.scss';

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Navbar className="bottom" data-test="bottom">
        <Col xs>
          <Image src={socialImg} />
        </Col>
        <Col xs md={{ order: 12, offset: 3 }} xl={{ order: 12, offset: 3 }} >
            <span>Copyright 2011 CCHS | Site Map</span>
            <span>Website Design by </span>
            <Image src={logoImg} />
        </Col>
      </Navbar>
    );
  }
}

export default Bottom;