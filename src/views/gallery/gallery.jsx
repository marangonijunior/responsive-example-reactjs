import React from 'react';
import Top from '../../components/top';
import Slider from '../../components/slider';
import Bottom from '../../components/bottom';
import Footer from '../../components/footer';
import ItemGallery from '../../components/item-gallery';

import CardGroup from 'react-bootstrap/CardGroup'

import './gallery.scss';

import bookImg from '../../assets/book.jpg';
import childImg from '../../assets/child.jpg';
import ducksImg from '../../assets/ducks.jpg';
import pianoImg from '../../assets/piano.jpg';
import rugbyImg from '../../assets/rugby.jpg';
import uniformImg from '../../assets/uniform.jpg';
import sportsImg from '../../assets/sports.jpg';
import classroomImg from '../../assets/classroom.jpg';


export default function Gallery(props) {

  let arrItem = [
    {
      title: 'PASTORAL SUPPORT',
      image: rugbyImg,
      color: '#D90F5A'
    },
    {
      title: 'CALENDAR',
      image: pianoImg,
      color: '#0DE5A8'
    },
    {
      title: 'BUSY BEES',
      image: ducksImg,
      color: '#30C4C9'
    },
    {
      title: 'NEWS',
      image: sportsImg,
      color: '#FF6E27'
    },
    {
      title: 'CURRICULUM',
      image: classroomImg,
      color: '#FFB60B'
    },
    {
      title: 'FIRST SCHOOL',
      image: bookImg,
      color: '#4f2958'
    },
    {
      title: 'CHILDREN',
      image: childImg,
      color: '#212D44'
    },
    {
      title: 'PARENTS',
      image: uniformImg,
      color: '#88C100'
    }
  ]

  return (
    <div className="gallery">
      <Top />
      <Slider />
      <CardGroup>
        {
          arrItem.map( (item, i) => {
            return <ItemGallery item={item} key={i}/>
          })
        }
      </CardGroup>
      <Footer />
      <Bottom />
    </div>
  );
}

        