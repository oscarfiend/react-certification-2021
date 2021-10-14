import styled, { keyframes } from 'styled-components';

const rotateAnimation = keyframes` 
    100% { transform: rotate(360deg)}
`;

const bounceAnimation = keyframes`
    0%, 100% { 
        transform: scale(0.0);
    } 50% { 
        transform: scale(1.0);
    }
`;

export const SpinnerContainer = styled.div`
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
  text-align: center;
  animation: ${rotateAnimation} 2s infinite linear;
`;

export const SpinnerItem = styled.div`
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: #e93d44;
  border-radius: 100%;
  animation: ${bounceAnimation} 2s infinite ease-in-out;
`;

export const Item2 = styled(SpinnerItem)`
  top: auto;
  bottom: 0;
  animation-delay: -1s;
`;
