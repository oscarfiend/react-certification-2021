import React, { useRef } from 'react';
import Layout from '../../components/Layout';
import VideoList from '../../components/VideoList/VideoList.component';
import items from '../../mocks/youtube-videos-mock.json';
import { Title } from './Home.styled';

import './Home.styles.css';

function HomePage() {
  const sectionRef = useRef(null);

  return (
    <Layout>
      <section className="homepage" ref={sectionRef}>
        <Title data-testid="title_home">
          <span>WIZE</span>
          <span>LINE</span>
          <span> - Youtube challenge!</span>
        </Title>
        <VideoList videos={items.items} data-testid="video_list"/>
      </section>
    </Layout>
  );
}

export default HomePage;
