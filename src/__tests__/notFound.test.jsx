import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Not found view tests', () => {
  beforeEach(() => {
    const history = createMemoryHistory();
    history.push('/invalidroute');
    render(
      <Router history={history}>
        <NotFound />
      </Router>
    );
  });

  test('should containt a not found text', () => {
    const errorText = screen.getByText(/the page you were looking for/i);
    expect(errorText).toBeInTheDocument();
  });

  test('should redirect to home page', () => {
    const button = screen.getByText(/Go Back/i);
    fireEvent.click(button);
    waitFor(() => expect(screen.findByText(/youtube challenge/i)).toBeInTheDocument());
  });
});
