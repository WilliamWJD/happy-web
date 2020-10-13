import styled from 'styled-components';

import imgLanding from '../../images/landing.svg';

export const PageLanding = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29b6d1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 520px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;

  background: url(${imgLanding}) no-repeat 70% center;

  main {
    max-width: 350px;
    h1 {
      font-size: 66px;
      font-weight: 900;
      line-height: 65px;
    }
  }

  > div {
    position: absolute;
    right: 0;
    top: 0;

    font-size: 20px;
    line-height: 30px;

    display: flex;
    flex-direction: column;
    text-align: right;

    strong {
      font-weight: 800;
    }
  }

  > a {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 50px;
    height: 50px;
    background: #ffd666;
    border-radius: 20px;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.2s;

    &:hover {
      background: #96feff;
    }
  }
`;
