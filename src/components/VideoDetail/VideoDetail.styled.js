import styled from 'styled-components';

export const DetailsContainer = styled.div`
  flex: 8;
  /* background-color: blue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 50px;
  @media (max-width: 640px) {
    padding: 0;
  }
`;

export const FrameContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  display: flex;
  flex-direction: column;
  outline-offset: -1px;
  padding-bottom: 56.25%;
`;

export const VideoFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80%;
  overflow: auto;
`;

export const DescriptionContainer = styled.div`
  padding: 10px;
`;

export const DescriptionDetails = styled.div`
  overflow: hidden;
  max-height: 90px;
  text-overflow: ellipsis;
  font-size: 16px;
`;

export const AddFavoriteButton = styled.button`
  padding: 12px 30px;
  background-color: #e3e3e3;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  position: absolute;
  border-radius: 5px;
  bottom: 15px;
  right: 0;
  transition: color 0.3s ease-out, background-color 0.3s ease-out;

  &:hover {
    background-color: #cccccc;
  }

  @media (max-width: 600px) {
    bottom: -10px;
  }
`;
