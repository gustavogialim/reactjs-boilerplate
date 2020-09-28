import styled from 'styled-components';

import colors from 'src/utils/styles/colors';

const Container = styled.div`
  background-color: ${colors.OFF_BLACK};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 54px;
    color: ${colors.PURPLE};
  }
  p {
    margin-top: 4px;
    font-size: 24px;
    line-height: 34px;
    color: ${colors.WHITE};
  }
`;

export { Container };
