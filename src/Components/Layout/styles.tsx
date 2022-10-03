import styled from "styled-components";

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};

window.addEventListener('resize', documentHeight);
documentHeight();


export const Container = styled.div`
  margin: 50px;

  .left-side {
    background: #c00d0d;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    box-shadow: -10px 9px #5e0000;
    display: grid;
    grid-template-rows: 130px auto 1fr;
    height: 566px;
    position: relative;
    width: 370px;

    .header {
      background-color: #8b0000;
      border-top-left-radius: 30px;
      height: 80px;
      position: absolute;
      width: 100%;
      z-index: 1;
    }

    .content {
      .screen {
        position: relative;
        left: 10px;
        z-index: 10;
      }
    }

    .footer {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 18px 0 18px 8px;
      z-index: 10;

      .btns {
        display: flex;
        gap: 16px;

        .big-btn {
          background: linear-gradient(top, #307bfb 0%, #0530e5 80%);
          background: -webkit-linear-gradient(top, #307bfb 0%, #0530e5 80%);
          background: -moz-linear-gradient(top, #307bfb 0%, #0530e5 80%);
          background: -o-linear-gradient(top, #307bfb 0%, #0530e5 80%);
          border-radius: 100px;
          box-shadow: -3px 2px #001c91;
          -webkit-box-shadow: -3px 2px #001c91;
          -moz-box-shadow: -3px 2px #001c91;
          -o-box-shadow: -3px 2px #001c91;
          -webkit-border-radius: 100px;
          -moz-border-radius: 100px;
          -o-border-radius: 100px;
          height: 50px;
          width: 50px;
        }

        .select-btn, .start-btn {
          border-radius: 100px;
          -webkit-border-radius: 100px;
          -moz-border-radius: 100px;
          -o-border-radius: 100px;
          box-shadow: -1px 2px #7b0000;
          -webkit-box-shadow: -1px 2px #7b0000;
          -moz-box-shadow: -1px 2px #7b0000;
          -o-box-shadow: -1px 2px #7b0000;
          height: 13px;
          margin-top: 12px;
          width: 50px;
        }

        .select-btn {
          background: linear-gradient(top, #50fb05 0%, #057b05 100%);
          background: -webkit-linear-gradient(top, #50fb05 0%, #057b05 100%);
          background: -moz-linear-gradient(top, #50fb05 0%, #057b05 100%);
          background: -o-linear-gradient(top, #50fb05 0%, #057b05 100%);
        }

        .start-btn {
          background: linear-gradient(top, #fb6505 0%, #bb0505 100%);
          background: -webkit-linear-gradient(top, #fb6505 0%, #bb0505 100%);
          background: -moz-linear-gradient(top, #fb6505 0%, #bb0505 100%);
          background: -o-linear-gradient(top, #fb6505 0%, #bb0505 100%);
        }
      }
    }

    .curve1 {
      align-items: center;
      background-color: #8b0000;
      border-bottom-right-radius: 85px 60px;
      -webkit-border-bottom-right-radius: 85px 60px;
      -moz-border-bottom-right-radius: 85px 60px;
      -o-border-bottom-right-radius: 85px 60px;
      border-top-left-radius: 30px;
      -webkit-border-top-left-radius: 30px;
      -moz-border-top-left-radius: 30px;
      -o-border-top-left-radius: 30px;
      box-shadow: -10px 9px #5e0000;
      display: flex;
      gap: 8px;
      height: 100px;
      padding-left: 15px;
      width: 180px;

      .details {
        display: flex;
        gap: 16px;

        .big-lens {
          background: radial-gradient(#05fbfb, #29abe3);
          border: 5px solid #fff;
          border-radius: 50px;
          box-shadow: 0 0 10px #490000;
          height: 70px;
          position: relative;
          width: 70px;
          z-index: 10;

          .reflect {
            background-color: #fff;
            border-radius: 15px 9px;
            -webkit-border-radius: 15px 9px;
            height: 18px;
            left: 50%;
            opacity: 0.6;
            position: relative;
            transform: translateX(-50%);
            top: 5px;
            width: 30px;
          }
        }

        .three-btn {
          display: flex;
          gap: 8px;
          z-index: 10;

          .small-btn {
            border-radius: 20px;
            -webkit-border-radius: 20px;
            box-shadow: 0 0 10px #490000;
            -webkit-box-shadow: 0 0 10px #490000;
            -moz-box-shadow: 0 0 10px #490000;
            -o-box-shadow: 0 0 10px #490000;
            height: 20px;
            width: 20px;
          }

          .btn-red {
            background: radial-gradient(#fb7b7b, #fb0505);
            background: -webkit-radial-gradient(#fb7b7b, #fb0505);
            background: -moz-radial-gradient(#fb7b7b, #fb0505);
            background: -o-radial-gradient(#fb7b7b, #fb0505);
          }

          .btn-yellow {
            background: radial-gradient(#fbfb9b, #fbfb05);
            background: -webkit-radial-gradient(#fbfb9b, #fbfb05);
            background: -moz-radial-gradient(#fbfb9b, #fbfb05);
            background: -o-radial-gradient(#fbfb9b, #fbfb05);
          }

          .btn-green {
            background: radial-gradient(#b0fb7b, #50fb05);
            background: -webkit-radial-gradient(#b0fb7b, #50fb05);
            background: -moz-radial-gradient(#b0fb7b, #50fb05);
            background: -o-radial-gradient(#b0fb7b, #50fb05);
          }
        }
      }
    }

    .curve2 {
      background: #c00d0d;
      border-top-left-radius: 85px 60px;
      bottom: 0;
      height: calc(100% - 40px);
      position: absolute;
      right: 0;
      width: 216px;
      z-index: 2;

      .connection {
        background: linear-gradient(left, #8b0000 0%, #c00d0d 50%, #8b0000 100%);
        background: -webkit-linear-gradient(left, #8b0000 0%, #c00d0d 50%, #8b0000 100%);
        background: -moz-linear-gradient(left, #8b0000 0%, #c00d0d 50%, #8b0000 100%);
        background: -o-linear-gradient(left, #8b0000 0%, #c00d0d 50%, #8b0000 100%);
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: space-between;
        padding-block: 64px;
        position: absolute;
        right: 0;
        width: 60px;
        z-index: 100;

        .separator {
          height: 40px;
          background-color: #5e0000;
          border-top: 2px solid #330000;
          border-bottom: 2px solid #330000;
          opacity: 0.3;
        }
      }
    }
  }

  @media (max-width: 595px) {
    display: flex;
    justify-content: center;
    margin: 0;
    margin-left: 0;

    .left-side {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      box-shadow: none;
      grid-template-rows: 130px 1fr 1fr;
      height: var(--doc-height);
      min-width: 300px;
      width: 100vw;

      .content {
        display: flex;
        justify-content: center;

        .screen {
          left: 0;
          width: 300px;
        }
      }

      .footer {
        align-items: center;
        padding: 0;
        padding-top: 40px;

        .btns {
          gap: 8px;
        }

        .search {
          width: 300px;
        }
      }

      .curve1 {
        border-top-left-radius: 0;
        -webkit-border-top-left-radius: 0;
        -moz-border-top-left-radius: 0;
        -o-border-top-left-radius: 0;
        box-shadow: none;
        width: calc(100vw - 188px);
      }

      .curve2 {
        border-top-left-radius: 110px 60px;

        .connection {
          display: none;
        }
      }
    }
  }
`;