import React from 'react';
import {useSpring, animated} from 'react-spring';

export default function Header() {
  /*
  const props = useSpring({
    from: { opacity: 0, color: "blue" },
    to: { opacity: 1, color: "red" }
  })
  */
 const props = useSpring({
    vector: [0, 10, 30],
    display: 'block',
    padding: 20,
    background: 'linear-gradient(to right, #009fff, #ec2f4b)',
    transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
    boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.4)',
    borderBottom: '10px solid #2D3747',
    shape: 'M20,20 L20,380 L380,380 L380,20 L20,20 Z',
    textShadow: '0px 5px 15px rgba(255,255,255,0.5)'
  });
  return (
    <animated.h1 style={props}>This is a react spring tester</animated.h1> 
  );  
}
