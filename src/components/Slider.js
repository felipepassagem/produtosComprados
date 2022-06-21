import React, { Fragment, useEffect, useRef, useState } from "react";
import "../static/style.css";
import {createUseStyles} from 'react-jss'

function Slider(props) {
  const { step, min, max, value, defaultLength, onChangeValue,linearGradientcolor,
    rangeBackgrondColor,
    sliderThumbColor, } = props;
  

  

  const useStyles = createUseStyles({
    rangeslider : {
      '&::-webkit-slider-thumb': {
        backgroundColor: props => props.sliderThumbColor,
        boxShadow: props => `0 0 0 3px #fff, 0 0 0 6px ${props.sliderThumbColor}`,
      },
      '&::-moz-slider-thumb': {
        backgroundColor: props => props.sliderThumbColor,
        boxShadow: props => `0 0 0 3px #fff, 0 0 0 6px ${props.sliderThumbColor}`,
      }
    }
  });

  const classes = useStyles(props);
  const rangeRef = useRef();
  const [range, setRange] = useState(defaultLength)

  const handleChange = (max) => (e) => {
    onChangeValue(e);
    setRange(e.target.value)
    console.log(range)
  };



  

  return (
    <Fragment>
      <div className="slider-container">
        <input
        ref={rangeRef}
          className={`range-slider ${classes.rangeslider}`}
          type="range"
          step={step}
          min={min}
          max={max}
          value={value}
          onChange={handleChange(max)}
          style={value == 0 
            ? {background: "linear-gradient(to right, rgba(216, 212, 212, 0.801), rgba(216, 212, 212, 0.801))"}
            : value == 1 
              ? {background:  "linear-gradient(to right, black, black, black,rgba(216, 212, 212, 0.801),rgba(216, 212, 212, 0.801),rgba(216, 212, 212, 0.801) ,rgba(216, 212, 212, 0.801))"}
              : {background:  "linear-gradient(to right, black, black)"}
          } 
            /* value > 0 ? {background: "linear-gradient(to right, rgba(182, 177, 177, 0.801), rgba(228, 7, 7, 0.801))", boxShadow: "0 0 5 5 black"} :  {background: "linear-gradient(to right, black, black)"} */
        />
        <span className="range-slider-value"></span>
        <div className="range-min-max-values">
          {/* <span>{min}</span>
          <span>{max}</span> */}
        </div>
      </div>
    </Fragment>
  );
}

export default Slider;
