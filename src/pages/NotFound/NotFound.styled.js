import styled from 'styled-components';
import image from '../../img/header-background-dots-pattern.svg';

export const NotFoundSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
`;

export const NotFoundBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: url(${image});
  background-size: cover;
  z-index: -1;
`;

export const NotFoundImage = styled.img`
  display: block;
  max-width: 100%;
  height: 6.5rem;
  margin-bottom: 3rem;
  margin-top: 3rem;
`;

export const NotFoundDescription = styled.strong`
  font-size: 2rem;
`;
