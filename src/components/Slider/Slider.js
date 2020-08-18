import React from 'react';
import './Slider.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
      activeImg: 0,
      fullScreen: false,
    }
  }

  componentDidMount() {
    this.timerID = setInterval( 
      () => this.autoChangeImg(), 3000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  nextImg = (e = null) => {
    if (e) {
      e.stopPropagation();
    }
    const nextImg = this.state.images[this.state.activeImg + 1] ?  this.state.activeImg + 1 : 0;
    this.setState({ activeImg: nextImg});
  }

  previousImg = (e = null) => {
    if (e) {
      e.stopPropagation();
    }

    const prevImg = (this.state.activeImg !== 0) ?  this.state.activeImg - 1 : this.state.images.length - 1;
    this.setState({ activeImg: prevImg});
  }

  autoChangeImg = () => {
    if (this.state.fullScreen) return;
    this.nextImg()
  }
  fullScreenToggle = () => {
    this.setState((state) => ({
      fullScreen: !state.fullScreen,
    }))
  }

  fullScreenOff = () => {
    this.setState({
      fullScreen: false,
    })
  }

  render() {
    return (
      <div
        className = { (this.state.fullScreen) ? "slider slider_active" : "slider" }
        style = {{ background: `no-repeat center/cover url(${this.state.images[this.state.activeImg]})` }}
        onClick = { this.fullScreenToggle }
      >
        <div className = "slider__btn slider__btn_left" onClick = { this.previousImg }>
          &#10096;
        </div>
        <div className = "slider__btn slider__btn_right" onClick = { this.nextImg }>
          &#10097;
        </div>
      </div>
    )
  }
  
}

export default Slider;