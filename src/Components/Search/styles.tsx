import styled from "styled-components";

export const Container = styled.div`
  background: -moz-linear-gradient(top, #a90909d1 80%, #67686c 81%);
  background: -webkit-linear-gradient(top, #a90909d1 80%, #67686c 81%);
  background: #a90909d1;
  background: linear-gradient(to bottom, #a90909d1 80%, #67686c 81%);
  border-radius: 5px;
  display: inline-flex;
  gap: 5px;
  max-width: 280px;
  padding: 5px;

  .pokemon-name {
    border: none;
    border-radius: 5px;
    font-family: 'VT323', monospace;
    font-size: 22px;
    padding: 10px;
    width: 100%;

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