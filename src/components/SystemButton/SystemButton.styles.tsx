import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: 20px;
  box-shadow: 0 0 10px #490000;
  height: 20px;
  width: 20px;

  &.red {
    background: radial-gradient(#fb7b7b, #fb0505);
  }

  &.yellow {
    background: radial-gradient(#fbfb9b, #fbfb05);
  }

  &.green {
    background: radial-gradient(#b0fb7b, #50fb05);
  }
`;
