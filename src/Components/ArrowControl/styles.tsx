import styled from "styled-components";


export const Container = styled.div`
  height: 90px;
  position: relative;
  width: 90px;
  /* border: 1px solid red; */

  .btn {
    background-color: #222;
    border-width: 0;
    box-shadow: -3px 2px #010101;
    -webkit-box-shadow: -3px 2px #010101;
    -moz-box-shadow: -3px 2px #010101;
    -o-box-shadow: -3px 2px #010101;
    height: 30px;
    position: absolute;
    width: 30px;

    /* Top */
    :nth-child(1) {
      border-top-left-radius: 5px;
      -webkit-border-top-left-radius: 5px;
      -moz-border-top-left-radius: 5px;
      -o-border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      -webkit-border-top-right-radius: 5px;
      -moz-border-top-right-radius: 5px;
      -o-border-top-right-radius: 5px;
      left: 30px;
      top: 0;

      div {
        border-right: 10px solid transparent;
        border-bottom: 10px solid #111;
        border-left: 10px solid transparent;
        height: 0;
        left: 4px;
        position: absolute;
        top: 5px;
        width: 0;
      }
    }

    /* Right */
    :nth-child(2) {
      border-top-right-radius: 5px;
      -webkit-border-top-right-radius: 5px;
      -moz-border-top-right-radius: 5px;
      -o-border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      -webkit-border-bottom-right-radius: 5px;
      -moz-border-bottom-right-radius: 5px;
      -o-border-bottom-right-radius: 5px;
      right: 0;
      top: 30px;

      div {
        border-top: 10px solid transparent;
        border-left: 10px solid #111;
        border-bottom: 10px solid transparent;
        height: 0;
        right: 5px;
        position: absolute;
        top: 5px;
        width: 0;
      }
    }

    /* Bottom */
    :nth-child(3) {
      border-bottom-right-radius: 5px;
      -webkit-border-bottom-right-radius: 5px;
      -moz-border-bottom-right-radius: 5px;
      -o-border-bottom-right-radius: 5px;
      border-bottom-left-radius: 5px;
      -webkit-border-bottom-left-radius: 5px;
      -moz-border-bottom-left-radius: 5px;
      -o-border-bottom-left-radius: 5px;
      bottom: 0;
      right: 30px;

      div {
        border-left: 10px solid transparent;
        border-top: 10px solid #111;
        border-right: 10px solid transparent;
        height: 0;
        left: 4px;
        position: absolute;
        bottom: 5px;
        width: 0;
      }
    }

    /* Left */
    :nth-child(4) {
      border-top-left-radius: 5px;
      -webkit-border-top-left-radius: 5px;
      -moz-border-top-left-radius: 5px;
      -o-border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      -webkit-border-bottom-left-radius: 5px;
      -moz-border-bottom-left-radius: 5px;
      -o-border-bottom-left-radius: 5px;
      left: 0;
      top: 30px;

      div {
        border-top: 10px solid transparent;
        border-right: 10px solid #111;
        border-bottom: 10px solid transparent;
        height: 0;
        left: 4px;
        position: absolute;
        top: 5px;
        width: 0;
      }
    }

    /* Center */
    :nth-child(5) {
      box-shadow: -3px 2px #222;
      -webkit-box-shadow: -3px 2px #222;
      -moz-box-shadow: -3px 2px #222;
      -o-box-shadow: -3px 2px #222;
      left: 30px;
      top: 30px;

      div {
        background: radial-gradient(#111, #222);
        background: -webkit-radial-gradient(#111, #222);
        background: -moz-radial-gradient(#111, #222);
        background: -o-radial-gradient(#111, #222);
        border-radius: 30px;
        -webkit-border-radius: 30px;
        -moz-border-radius: 30px;
        -o-border-radius: 30px;
        height: 20px;
        left: 4px;
        position: absolute;
        top: 5px;
        width: 20px;
      }
    }

    :nth-child(even) {
      :hover {
        background-color: #222222d1;
        cursor: pointer;
      }
    }
  }
`;