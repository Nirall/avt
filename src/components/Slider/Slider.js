import React from 'react';
import './Slider.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: this.props.images,
      activeImg: this.props.activeImg,
      fullScreen: this.props.active,
      isHideFullScreen: false,
    }
  }

  componentDidMount() {
    this.timerID = setInterval( 
      () => this.autoChangeImg(), 3000
    );
    window.addEventListener("resize", this.resize);
    this.resize();
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  resize = () => {
    let isCurrentWidthLess = (window.innerWidth < 750);

    if (this.props.resizeObserver && isCurrentWidthLess) {
      this.props.resizeObserver();
    }

    if (isCurrentWidthLess !== this.state.isHideFullScreen) {
      this.setState({ isHideFullScreen: isCurrentWidthLess });
    }

    if (isCurrentWidthLess && this.state.fullScreen) {
      this.setState({ fullScreen: false })
    }
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
    if (this.state.fullScreen) {
      if (!this.state.isHideFullScreen) {
        return;
      }
    }

    this.nextImg()
  }

  fullScreenOn = () => {
    if (!this.state.isHideFullScreen) {
      this.setState((state) => ({
        fullScreen: true,
      }))
    }
  }

  fullScreenOff = (e) => {
    e.stopPropagation();

    this.setState((state) => ({
      fullScreen: false,
    }))

    if (this.props.closeObserver) {
      this.props.closeObserver();
    }
  }

  render() {
    let closeBtn;
    if (this.state.fullScreen && !this.state.isHideFullScreen) {
      closeBtn = <div className = "slider__btn slider__btn_close" onClick = { this.fullScreenOff }>&#10006;</div>
    }

    return (
      <div className = { (this.state.fullScreen && !this.state.isHideFullScreen) ? "slider__modal slider__modal_active" : "slider__modal" }>
        <div
          className = { (this.state.fullScreen && !this.state.isHideFullScreen) ? "slider slider_active" : "slider" }
          style = {{ background: `no-repeat center/cover url(${this.state.images[this.state.activeImg]})` }}
          onClick = { this.fullScreenOn }
        >
          { closeBtn }
          <div className = "slider__btn slider__btn_left" onClick = { this.previousImg }>
            &#10096;
          </div>
          <div className = "slider__btn slider__btn_right" onClick = { this.nextImg }>
            &#10097;
          </div>
        </div>
      </div>
    )
  }
  
}

Slider.defaultProps = {
  active: false,
  activeImg: 0,
}

export default Slider;