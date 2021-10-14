import React, { useContext } from 'react';
import VideoList from '../../components/VideoList/VideoList.component';
import ThemeContext from '../../context/theme/themeContext';
import { Title } from './Home.styled';

import './Home.styles.css';

function HomePage() {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;
  return (
    <section className="homepage">
      <Title data-testid="title_home" theme={theme}>
        <span>WIZE</span>
        <span>LINE</span>
        <span> - Youtube challenge!</span>
      </Title>
      <VideoList data-testid="video_list" />
    </section>
  );
}

export default HomePage;
