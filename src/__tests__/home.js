import { render, screen } from '@testing-library/react';
import React from 'react';

import Home from '../pages/Home';

describe('Home view tests', () => {
  test('should containt a home title', () => {
    render(<Home />);
    const title = screen.getByTestId(/title_home/i);
    expect(title).toBeInTheDocument();
  });

  test('should containt specific title', () => {
    render(<Home />);
    const title = screen.getByText((content, node) => {
      const hasText = (node) =>
        node.textContent.toLowerCase() === 'wizeline - Youtube challenge!'.toLowerCase();
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
    expect(title).toBeInTheDocument();
  });
});
