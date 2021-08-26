import styled from 'styled-components';

export const Button = styled.img`
  max-width: 20px;
  height: auto;
  cursor: pointer;
  &:hover {
    transform: scale(1.3);
  }
`;

export const Card = styled.div`
  margin: 30px 15px;
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 340px;
  height: 420px;
  box-sizing: border-box;

  &:hover {
    transform: scale(1.03);
    box-shadow: ${(props) => props.theme.cardShadow};

    & > img:first-child {
      display: inline;
      cursor: pointer;
      border-radius: 50%;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
      }
    }
  }

  & > img:first-child {
    display: none;
    position: absolute;
    top: 15%;
    left: calc(50% - 25px);
    width: 50px;
    height: 50px;
    z-index: 900;
  }

  @media (max-width: 380px) {
    width: 95%;
  }
`;

export const CardTitle = styled.h4`
  margin: 0;
  margin-bottom: 10px;
`;

export const CardHeader = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 15px;
  min-height: 250px;

  & > span {
    max-height: 60px;
    overflow: hidden;
    font-size: 14px;
    color: ${(props) => props.theme.descriptionColor};
    text-align: left;
  }
`;

export const VideoFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const VideoDate = styled.div`
  & > h5 {
    margin: 0;
  }

  & > small {
    font-size: 12px;
    color: ${(props) => props.theme.descriptionColor};
  }
`;
