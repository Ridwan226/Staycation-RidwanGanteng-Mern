import React from 'react';
import {render} from '@testing-library/react';
import Button from './index';

test('Should not allowed button if isDisabled', () => {
  const {container} = render(<Button isDisabled></Button>);

  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});
