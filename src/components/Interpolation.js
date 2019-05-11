import React from 'react';
import {useSpring, animated, interpolate} from 'react-spring';

export default function Interpolation() {
  const {o, xyz, color} = useSpring({
    from: {o: 0, xyz: [0, 0, 0], color: 'lightpink'},
    o: 1,
    xyz: [10, 20, 5],
    color: 'white'
  });
  return (
    <animated.div
      style={{
      // If you can, use plain animated values like always, ...
      // You would do that in all cases where values "just fit"
        color,
      // Unless you need to interpolate them
        background: o.interpolate(o => `rgba(180, 57, 177, ${o})`),
      // Which works with arrays as well
        transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
      // If you want to combine multiple values use the "interpolate" helper
        border: interpolate([o, color], (o, c) => `${o * 10}px solid ${c}`),
      // You can also form ranges, even chain multiple interpolations
        padding: o.interpolate({range: [0, 0.5, 1], output: [0, 0, 10]}).interpolate(o => `${o}%`),
      // Interpolating strings (like up-front) through ranges is allowed ...
        borderColor: o.interpolate({range: [0, 1], output: ['lightpink', 'pink']}),
      // There's also a shortcut for plain, optionless ranges ...
        opacity: o.interpolate([0.1, 0.2, 0.6, 1], [1, 0.1, 0.5, 1])
      }}
    >
      {o.interpolate(n => n.toFixed(2)) /* innerText interpolation ... */}
    </animated.div>
  )
}
