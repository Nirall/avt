import React from 'react';
import './Slider.css';
import leftArrow from './left-arrow.png';
import rightArrow from './right-arrow.png';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
      activeImg: 0,
    }
  }

  componentDidMount() {
    this.timerID = setInterval( 
      () => this.nextImg(), 3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  nextImg = () => {
    const nextImg = this.state.images[this.state.activeImg + 1] ?  this.state.activeImg + 1 : 0;
    this.setState({ activeImg: nextImg});
  }

  previousImg = () => {
    const nextImg = (this.state.activeImg !== 0) ?  this.state.activeImg - 1 : this.state.images.length - 1;
    this.setState({ activeImg: nextImg});
  }

  render() {
    return (
      <div className = "slider" style = {{ background: `no-repeat center/cover url(${this.state.images[this.state.activeImg]})` }}>
        <div className = "slider__btn slider__btn_left" onClick = { this.previousImg }>
          <img src = { leftArrow } alt = "левая стрелка" />
        </div>
        <div className = "slider__btn slider__btn_right" onClick = { this.nextImg }>
          <img src = { rightArrow } alt = "правая стрелка" />
        </div>
      </div>
    )
  }
  
}

export default Slider;