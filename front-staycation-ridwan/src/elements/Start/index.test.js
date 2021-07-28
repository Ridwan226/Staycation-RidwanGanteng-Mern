import React from 'react';

import {render} from '@testing-library/react';
import Start from './index';

test('Shoud props [value height width spacing]', () => {
  const height = 40,
    width = 40,
    spacing = 4;

  const {container} = render(
    <Start height={height} width={width} spacing={spacing} value={3.6} />,
  );

  const startYellow = 'div.starts div.star:not(.placeholder)';

  expect(container.querySelector('div.starts')).toBeInTheDocument();
  expect(container.querySelector('div.starts')).toHaveAttribute(
    'style',
    expect.stringContaining(`height: ${height}`),
  );
  expect(container.querySelector(startYellow)).toHaveAttribute(
    'style',
    expect.stringContaining(`width: ${width}px`),
  );
  expect(container.querySelector(startYellow)).toHaveAttribute(
    'style',
    expect.stringContaining(`height: ${height}px`),
  );
  expect(container.querySelector(startYellow)).toHaveAttribute(
    'style',
    expect.stringContaining(`margin-right: ${spacing}px`),
  );
});
