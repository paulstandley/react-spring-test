import React from 'react';
import {useSpring, animated} from 'react-spring';

function Fadein() {
  const props = useSpring(
    {opacity: 1, from: {opacity: 0}}
    );
  return (
  <animated.div style={props}>
    <span style={fadeStyle} >
      <h3>I will fade in</h3>
    </span>
  </animated.div>);
}

const fadeStyle = {
  color: "red",
  fontSize: "1.4rem" 
}

export default Fadein;