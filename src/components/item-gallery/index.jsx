import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import './item-gallery.scss';

class ItemGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { item } = this.props;
    return (
      <Col sm={3} className="item">
        <Card style={{ width: '100%' }}>
          <Card.Img variant="top" style={{backgroundImage: `url(${item.image})`, backgroundSize: 'cover', width: '100%', 'height': '30vh'}} />
          <Card.Footer style={{'background':item.color, height: '5%', padding: '4%', textAlign: 'center'}}>
            <small className="text">{item.title}</small>
          </Card.Footer>
        </Card>
      </Col>
      
    );
  }
}

export default ItemGallery;