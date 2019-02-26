import React, { PureComponent } from "react";
import PropTypes from "prop-types";

const wrapStyleDefault = {
  position: "relative",
  display: "inline-block",
  overflow: "hidden",
  cursor: "pointer",
};

class Ripples extends PureComponent {
  static propTypes = {
    duration: PropTypes.number,
    color: PropTypes.string,
    style: PropTypes.object,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    duration: 1000,
    color: "rgba(0, 0, 0, .3)",
    onClick: () => {},
    style: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      rippleStyle: {
        position: "absolute",
        borderRadius: "50%",
        opacity: 0,
        width: 25,
        height: 25,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
        backgroundColor: props.color,
      },
    };
  }

  update = () => {
    const { duration } = this.props;
    const start = new Date();
    const end = start + duration;

    this.setState({
      rippleStyle: {
        ...this.state.rippleStyle,
        opacity: 0,
        transform: `translate(-50%, -50%) scale(10) `,
        transition: `all ${duration}ms`,
      },
    });
    if (Date.now() < end) requestAnimationFrame(this.update);
    cancelAnimationFrame(this.update);
  };

  handleClick = e => {
    if (e.stopPropagation) {
      e.stopPropagation();
    }

    const { onClick } = this.props;
    const { clientX, clientY, currentTarget } = e;

    const ripple = currentTarget;

    const rippleTop = Math.round(ripple.getBoundingClientRect().top, 0);
    const rippleLeft = Math.round(ripple.getBoundingClientRect().left, 0);

    const left = clientX - rippleLeft;
    const top = clientY - rippleTop;

    this.setState({
      rippleStyle: {
        ...this.state.rippleStyle,
        top,
        left,
        opacity: 1,
        transform: "translate(-50%, -50%)",
        transition: "initial",
      },
    });

    requestAnimationFrame(this.update);

    onClick(e);
  };

  render() {
    const { children, style, duration, color, ...props } = this.props;

    const { state, handleClick } = this;

    const wrapStyle = {
      ...style,
      ...wrapStyleDefault,
    };

    return (
      <div {...props} style={wrapStyle} onClick={handleClick}>
        {children}
        <span style={state.rippleStyle} />
      </div>
    );
  }
}

export default Ripples;
