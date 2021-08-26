import React, { useContext } from 'react';
import VideoList from '../../components/VideoList/VideoList.component';
import ThemeContext from '../../context/theme/themeContext';
import VideosContext from '../../context/video/videoContext';
import { Title } from './Home.styled';

import './Home.styles.css';

function HomePage() {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  const videoContext = useContext(VideosContext);
  const { data, loading, error } = videoContext;
  const videos = data ? data.items : [];
  return (
    <section className="homepage">
      <Title data-testid="title_home" theme={theme}>
        <span>WIZE</span>
        <span>LINE</span>
        <span> - Youtube challenge!</span>
      </Title>
      {videos && (
        <VideoList
          videos={videos}
          loading={loading}
          error={error}
          data-testid="video_list"
        />
      )}
    </section>
  );
}

export default HomePage;
