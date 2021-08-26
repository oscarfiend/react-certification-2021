import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act } from '@testing-library/react-hooks';
import ThemeState from '../context/theme/themeState';
import VideoState from '../context/video/VideoState';
import Authstate from '../context/auth/authState';
import Header from '../components/Header';

import videosMock from '../mocks/youtube-videos-mock.json';
import axiosClient from '../config/axios';

jest.mock('../config/axios');
describe('Header component tests', () => {
  beforeEach(async () => {
    axiosClient.mockReturnValue(
      Promise.resolve({
        data: { ...videosMock },
      })
    );
    await act(async () => {
      render(
        <VideoState>
          <ThemeState>
            <Authstate>
              <BrowserRouter>
                <Header />
              </BrowserRouter>
            </Authstate>
          </ThemeState>
        </VideoState>
      );
    });
  });

  test('should containt a toggle button', () => {
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeInTheDocument();
  });

  test('Toggle button should be checkbox type', () => {
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toHaveAttribute('type', 'checkbox');
  });

  test('Toggle button should change the theme', () => {
    const labelLight = screen.queryByLabelText(/Light Mode/i);
    expect(labelLight).toBeInTheDocument();
    const toggle = screen.getByLabelText(/light Mode/i);
    fireEvent.click(toggle);
    const labelDark = screen.queryByLabelText(/Dark Mode/i);
    expect(labelDark).toBeInTheDocument();
  });

  test('Toggle button should be checkbox type', () => {
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toHaveAttribute('type', 'checkbox');
  });

  test('Toggle button should containt a label', () => {
    const toggle = screen.queryByLabelText(/Light Mode/i);
    expect(toggle).toBeInTheDocument();
  });

  test('should containt a login component', () => {
    const login = screen.getByTestId(/avatar_login/i);
    expect(login).toBeInTheDocument();
  });

  test('should containt a search form', () => {
    const search = screen.getByTestId(/search_form/i);
    expect(search).toBeInTheDocument();
  });

  test('search field should be disabled', () => {
    const search = screen.getByTestId(/search_field/i);
    expect(search).not.toHaveAttribute('disabled');
  });

  test('should containt a hamburguer menu', () => {
    const menu = screen.getByTestId(/hamburguerMenu/i);
    expect(menu).toBeInTheDocument();
  });

  test('menu should be type checkbox', () => {
    const menu = screen.getByTestId(/hamburguerMenu/i);
    expect(menu).toHaveAttribute('type', 'checkbox');
  });
});
