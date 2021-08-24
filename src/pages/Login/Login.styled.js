import styled from 'styled-components';

export const Modal = styled.div`
  max-width: 500px;
  background-color: transparent;
  position: fixed;
  top: 110px;
  z-index: 1400;
  max-height: calc(100% - 200px);
  left: calc(55% - 250px);
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    left: 0px;
    margin: 0px 10px;
  }
`;

export const ModalShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 1300;
`;
