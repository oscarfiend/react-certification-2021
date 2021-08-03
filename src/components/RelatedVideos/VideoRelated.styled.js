import styled from 'styled-components';

export const RelatedContainer = styled.div`
  flex: 4;
  overflow: scroll;
  max-height: 100%;
  padding-top: 10px;
`;

export const ImageRelated = styled.img`
  margin-right: 20px;
  max-height: 70px;
`;

export const CardRelated = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
  font-size: 14px;
  max-height: 100%;
  overflow-y: hidden;
  cursor: pointer;
`;