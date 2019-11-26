import React, { Component } from 'react';
import { Navbar, Image } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'

import './top.scss';
import logoImg from '../../assets/logo.jpg';

class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Navbar className="top">
        <Navbar.Brand href="#home">
          <Image src={logoImg} fluid/>
        </Navbar.Brand>
        <div className="topRight">
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon={faBars} />
        </div>
      </Navbar>
    );
  }
}

export default Top;