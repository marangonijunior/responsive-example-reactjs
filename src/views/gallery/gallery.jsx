import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import GalleryStore from '../../store/actions/gallery';

import Top from '../../components/top';
import Slider from '../../components/slider';
import Bottom from '../../components/bottom';
import Footer from '../../components/footer';
import ItemGallery from '../../components/item-gallery';

import CardGroup from 'react-bootstrap/CardGroup'

import './gallery.scss';

export default function Gallery(props) {

  const { gallery } = useSelector(state => {
    return state
  });
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GalleryStore(''));
  }, []);

  return (
    <div className="gallery">
      <Top />
      <Slider />
      <CardGroup>
        {
          gallery.data && gallery.data.data.map( (item, i) => {
            return <ItemGallery item={item} key={i}/>
          })
        }
      </CardGroup>
      <Footer />
      <Bottom />
    </div>
  );
}

        