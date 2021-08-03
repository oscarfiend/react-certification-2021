import { render, screen } from '@testing-library/react';
import React from 'react';
import VideoContext from '../context/videoContext';

import Home from '../pages/Home';

describe('Home view tests', () => {
  beforeEach(() => {
    render(<VideoContext><Home/></VideoContext>)
  });

  test('should containt specific title', () => {
    const title = screen.getByText(/Youtube challenge/i)
    expect(title).toBeInTheDocument();
  });
});
