import styled from "styled-components";

export const Container = styled.div`
  margin: 50px;
  background: #ed7165;
  background: -moz-linear-gradient(top, #ed7165 80%, #67686c 81%);
  background: -webkit-linear-gradient(top, #ed7165 80%, #67686c 81%);
  background: linear-gradient(to bottom, #ed7165 80%, #67686c 81%);
  border-radius: 5px;
  display: inline-flex;
  padding: 5px;
  gap: 5px;

  .pokemon-name {
    border: none;
    border-radius: 5px;
    font-family: 'VT323', monospace;
    font-size: 22px;
    padding: 10px;

    :focus-visible {
      outline: none;
    }
  }

  .input-error {
    outline: 2px solid #f00;

    :focus-visible {
      outline: 2px solid #f00;
    }
  }

  .search-btn {
    background: #222;
    border-radius: 5px;
    border: none;
    height: 42px;
    padding: 1px 6px;

    :hover {
      background: #222222d1;
      cursor: pointer;
    }
  }
`;