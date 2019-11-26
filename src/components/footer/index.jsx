import React, { Component } from 'react';
import { Container, Col ,Row } from 'react-bootstrap';
import Map from '../map';


import './footer.scss';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <Container className="footer" xs={{ order: 12 }} md={{ order: 12 }} lg={{ order: 12 }}>
          <Row>
            <Col md='6' xs='6' xl='6' lg='6'>
              <Row style={{padding: '2%'}}>
                  <Col md='6' xs='6' xl='6' lg='6'>
                    <h5>USEFUL LINKS</h5>
                    <Row style={{padding: '2%'}}>
                      <Col md='6' xs='6' xl='6' lg='6'>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                      </Col>
                      <Col md='6' xs='6' xl='6' lg='6'>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                      </Col>
                    </Row>
                  </Col>
                  <Col md='6' xs='6' xl='6' lg='6'>
                    <h5>USEFUL LINKS</h5>
                    <Row style={{padding: '2%'}}>
                      <Col md='6' xs='6' xl='6' lg='6'>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                      </Col>
                      <Col md='6' xs='6' xl='6' lg='6'>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                        <h5>Text example</h5>
                      </Col>
                    </Row>
                  </Col>
              </Row>
            </Col>
            <Col  md='6' xs='6' xl='6' lg='6' style={{ width: '100vw', height: '100%', paddingRight: '0px !important', paddingLeft: '0px !important'}}>
              <Map />
            </Col>
          </Row>      
      </Container>
    );
  }
}

export default Footer;