import React, { useRef } from 'react';
import VideoList from '../../components/VideoList/VideoList.component';
import { Title } from './Home.styled';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);
  return (
      <section className="homepage" ref={sectionRef}>
        <Title data-testid="title_home">
          <span>WIZE</span>
          <span>LINE</span>
          <span> - Youtube challenge!</span>
        </Title>
        <VideoList data-testid="video_list" />
      </section>
  );
}

export default HomePage;
