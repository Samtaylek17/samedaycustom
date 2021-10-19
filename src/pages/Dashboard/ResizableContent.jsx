import React, { Fragment, useState } from 'react';
import ResizableRect from 'react-resizable-rotatable-draggable';
import PropTypes from 'prop-types';

const ResizableContent = (props) => {
  const { width, height, top, left, rotateAngle } = props;
  const [defaultWidth, setWidth] = useState(width);
  const [defaultHeight, setHeight] = useState(height);
  const [defaultTop, setTop] = useState(top);
  const [defaultLeft, setLeft] = useState(left);
  const [defaultRotateAngle, setRotateAngle] = useState(rotateAngle);

  const contentStyle = {
    top: defaultTop,
    left: defaultLeft,
    width: defaultWidth,
    height: defaultHeight,
    position: 'absolute',
    transform: `rotate(${defaultRotateAngle}deg)`,
  };

  const handleResize = (style, isShiftKey, type) => {
    setWidth(Math.round(style.width));
    setHeight(Math.round(style.height));
    setTop(Math.round(style.top));
    setLeft(Math.round(style.left));
  };

  const handleRotate = (currentRotateAngle) => {
    setRotateAngle(currentRotateAngle);
  };

  const handleDrag = (deltaX, deltaY) => {
    setLeft(defaultLeft + deltaX);
    setTop(defaultTop + deltaY);
  };

  const { children } = props;

  return (
    <>
      <div style={contentStyle}>{children}</div>

      <ResizableRect
        top={defaultTop}
        rotatable
        left={defaultLeft}
        aspectRatio
        minWidth={10}
        width={defaultWidth}
        minHeight={10}
        height={defaultHeight}
        onDrag={handleDrag}
        onRotate={handleRotate}
        onResize={handleResize}
        zoomable="nw, ne, se, sw"
        rotateAngle={defaultRotateAngle}
      />
    </>
  );
};

ResizableContent.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  rotateAngle: PropTypes.number.isRequired,
  children: PropTypes.instanceOf(React.propTypes).isRequired,
};

export default ResizableContent;
