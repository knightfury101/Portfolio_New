import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

function Cursor() {
  return (
    <AnimatedCursor
      innerSize={15}
      outerSize={15}
      color='182, 40, 255'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
  );
}

export default Cursor;
