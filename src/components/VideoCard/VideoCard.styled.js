import styled from 'styled-components';

export const Card = styled.div`
  margin: 30px 15px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 340px;
  height: 420px;
  cursor: pointer;
  box-sizing: border-box;

    &:hover {
      transform: scale(1.03);
      box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
      &>img:first-child{
        display: inline;
      }
    }

    &>img:first-child{
      display: none;
      position: absolute;
      top: 15%;
      left: calc(50% - 25px);
      width: 50px;
      height: 50px;
      z-index:900;
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
    color: #545d7a;
    text-align: left;
  }
`;

export const VideoFooter = styled.div`
  display: flex;
  margin-top: auto;
`;

export const VideoDate = styled.div`
  & > h5 {
    margin: 0;
  }

  & > small {
    font-size: 12px;
    color: #545d7a;
  }
`;

