import React from 'react';
import propTypes from 'prop-types';

import './index.scss';

export default function Start({className, value, height, width, spacing}) {
  const decimal = Number(value) % 1;
  const start = [];
  let leftPost = 0;
  for (let index = 0; index < 5 && index < value - decimal; index++) {
    leftPost = leftPost + width;
    start.push(
      <div
        className="star"
        key={`start-${index}`}
        style={{
          left: index * width,
          width: width,
          marginRight: spacing,
          height: height,
        }}></div>,
    );
  }

  if (decimal > 0 && value <= 5) {
    start.push(
      <div
        className="star"
        key={`startWithDecimals`}
        style={{
          left: leftPost,
          width: decimal * width - spacing,
          height: height,
        }}></div>,
    );
  }

  const startPlaceholder = [];

  for (let index = 0; index < 5; index++) {
    leftPost = leftPost + width;
    startPlaceholder.push(
      <div
        className="star placeholder"
        key={`startPlaceholder-${index}`}
        style={{
          left: index * width,
          width: width,
          marginRight: spacing,
          height: height,
        }}></div>,
    );
  }

  return (
    <>
      <div className={['starts', className].join(' ')} style={{height: height}}>
        {startPlaceholder}
        {start}
      </div>
    </>
  );
}

Start.propTypes = {
  className: propTypes.string,
  value: propTypes.number,
  width: propTypes.number,
  height: propTypes.number,
  spacing: propTypes.number,
};
