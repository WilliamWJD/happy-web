import styled, { keyframes } from 'styled-components';
import { Popup } from 'react-leaflet';

const appearFromLeft = keyframes`
  from{
    opacity:0;
    transform: translateX(-50px);
  }
  to{
    opacity:1;
    tranform:translateX(0)
  }
`;

export const PageMap = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 440px;
    background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > div {
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: space-between;

      animation: ${appearFromLeft} 1s;
    }

    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    p {
      line-height: 28px;
      margin-top: 24px;
    }

    footer {
      display: flex;
      flex-direction: column;

      line-height: 24px;

      strong {
        font-weight: 800;

        svg {
          margin-left: 5px;
        }
      }

      ul {
        list-style: none;
        display: flex;
        flex-direction: row;

        li {
          margin: 5px 5px 0 0;
          img {
            width: 30px;
            height: 30px;
            transition: 0.2s;

            &:hover {
              transform: translateY(-3px);
            }
          }
        }
      }
    }
  }

  .leaflet-container {
    z-index: 5;
  }

  > a {
    z-index: 10;

    position: absolute;
    right: 40px;
    bottom: 40px;

    width: 60px;
    height: 60px;
    background: #15c3d6;
    border-radius: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;

    &:hover {
      background: #17d6eb;
    }
  }
`;

export const MarkPopup = styled(Popup)`
  .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    box-shadow: none;
    border-radius: 20px;
  }

  .leaflet-popup-content {
    color: #0089a5;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #15c3d6;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .leaflet-popup-tip-container {
    display: none;
  }
`;
