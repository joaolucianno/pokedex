import styled from "styled-components";

export const Container = styled.div`
  background-color: #b0b0b0;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -o-border-radius: 15px;
  display: grid;
  grid-template-rows: auto 1fr auto;
  height: 245px;
  padding-inline: 20px;
  position: relative;
  width: 280px;

  .screen-header, .screen-footer {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .screen-header {
    margin-block: 6px;
  }

  .screen-picture {
    align-items: center;
    background-color: #fff;
    border: 3px solid #494949;
    border-radius: 15px;
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    -o-border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    height: 175px;
    justify-content: center;
    width: 100%;

    .title {
      font-family: 'VT323', monospace;
      font-size: 24px;
      text-transform: capitalize;
    }
    
    img {
      width: 75%;
      height: 75%;
      object-fit: contain;
      -webkit-touch-callout: none;
    }
  }

  .small-btn, .big-btn {
    background-color: #c00d0d;
    background: linear-gradient(top, #c00d0d 0%, #8b0000 80%);
    background: -webkit-linear-gradient(top, #c00d0d 0%, #8b0000 80%);
    background: -moz-linear-gradient(top, #c00d0d 0%, #8b0000 80%);
    background: -o-linear-gradient(top, #c00d0d 0%, #8b0000 80%);
    border-radius: 50%;
  }

  .small-btn {
    border: 1px solid #000;
    height: 10px;
    width: 10px;
  }

  .big-btn {
    height: 26px;
    position: relative;
    width: 26px;

    :first-child {
      margin-left: 12px;
    }

    :nth-child(2) {
      ::after {
        content: "";
        background: #fff;
        height: 10px;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 10px;
      }
    }

    :hover {
      cursor: pointer;
      opacity: .8;
    }
  }

  .speaker {
    width: 75px;

    .sp {
      background-color: #494949;
      border-radius: 30px;
      -webkit-border-radius: 30px;
      -moz-border-radius: 30px;
      -o-border-radius: 30px;
      height: 3px;
      margin-bottom: 5px;
    }
  }

  .screen-footer {
    justify-content: space-between;
    padding: 20px;
    position: relative;
    top: -10px;

    .sound-controls {
      display: flex;
      gap: 12px;
    }
  }

  ::after {
    content: "";
    border-top: 40px solid #b0b0b0;
    border-left: 40px solid #c00d0d;
    height: 0;
    position: absolute;
    bottom: 0;
    left: 0;
  }
`;