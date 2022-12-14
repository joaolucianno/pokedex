import styled from "styled-components";


export const Container = styled.div`
  background-color: #30da0c;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -o-border-radius: 15px;
  box-shadow: 0 0 20px #003300 inset;
  -webkit-box-shadow: 0 0 20px #003300 inset;
  -moz-box-shadow: 0 0 20px #003300 inset;
  -o-box-shadow: 0 0 20px #003300 inset;
  height: 150px;
  padding: 10px;
  width: 300px;

  .title-diff {
    font-family: 'VT323', monospace;
    font-size: 1.8rem;
    text-transform: capitalize;
  }

  .status {
    margin-top: 10px;
  }
`;