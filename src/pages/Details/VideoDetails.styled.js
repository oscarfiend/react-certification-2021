import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  max-height: 110vh;

  @media (max-width: 640px) {
    flex-direction: column;
    max-height: 150vh;
  }
`;

