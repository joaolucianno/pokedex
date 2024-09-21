import styled from '@emotion/styled';

export const Container = styled.input`
  border-radius: 5px;
  font-family: 'VT323', monospace;
  font-size: 22px;
  padding: 10px;
  width: 100%;

  :focus-visible {
    outline: none;
  }

  .input-error {
    outline: 2px solid #f00;

    :focus-visible {
      outline: 2px solid #f00;
    }
  }
`;
