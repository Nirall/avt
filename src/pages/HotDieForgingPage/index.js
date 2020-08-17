import React from 'react';
import Slider from '../../components/Slider/Slider';
import './index.css';

import img1 from './sliderImgs/1.jpg';
import img2 from './sliderImgs/2.jpg';
import img3 from './sliderImgs/3.jpg';


function HotDieForgingPage(props) {
  return (
    <div className = "content">
      <div className = "top-img stamp-img"></div>
      <main className = "main">
        <h1>Штамповка</h1>
        <Slider images = { [img1, img2, img3] }></Slider>
      </main>
    </div>
  )
}

export default HotDieForgingPage;