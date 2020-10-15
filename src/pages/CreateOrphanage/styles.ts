import styled, { css } from 'styled-components';

interface OptionProps {
  active?: boolean;
}

export const Container = styled.div`
  display: flex;
`;

export const Main = styled.div`
  flex: 1;
`;

export const Form = styled.form`
  width: 700px;
  margin: 64px auto;

  background: #ffffff;
  border: 1px solid #d3e2e5;
  border-radius: 20px;

  padding: 64px 80px;

  overflow: hidden;

  fieldset + fieldset {
    margin-top: 80px;
  }

  fieldset {
    border: 0;

    legend {
      width: 100%;

      font-size: 32px;
      line-height: 34px;
      color: #5c8599;
      font-weight: 700;

      border-bottom: 1px solid #d3e2e5;
      margin-bottom: 40px;
      padding-bottom: 24px;
    }
  }
`;

export const InputBlock = styled.div`
  margin-top: 24px;

  label {
    display: flex;
    color: #8fa7b3;
    margin-bottom: 8px;
    line-height: 24px;

    span {
      font-size: 14px;
      color: #8fa7b3;
      margin-left: 24px;
      line-height: 24px;
    }
  }

  input,
  textarea {
    width: 100%;
    background: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 20px;
    outline: none;
    color: #5c8599;
  }

  input {
    height: 64px;
    padding: 0 16px;
  }

  textarea {
    min-height: 120px;
    max-height: 240px;
    resize: vertical;
    padding: 16px;
    line-height: 28px;
  }

  input[type='file'] {
    display: none;
  }
`;

export const UploadedImages = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 16px;

  > div {
    width: 100%;
    height: 96px;
    border-radius: 20px;
    position: relative;

    img {
      width: 100%;
      height: 96px;
      object-fit: cover;
      border-radius: 20px;
    }

    button {
      border: none;
      border: 1px solid #d3e2e5;
      background-color: #fff;
      position: absolute;
      border-radius: 0 19px 0 20px;
      padding: 4px 8px;
      right: 0;
      color: #ff669d;
      font-size: 20px;
      cursor: pointer;
    }
  }

  > label {
    height: 96px;
    background: #f5f8fa;
    border: 1px dashed #96d2f0;
    border-radius: 20px;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const BoxOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ButtonActive = styled.button<OptionProps>`
  height: 64px;
  background: #f5f8fa;
  border: 1px solid #d3e2e5;
  color: #5c8599;
  cursor: pointer;

  ${props =>
    props.active &&
    css`
      background: #edfff6;
      border: 1px solid #a1e9c5;
      color: #37c77f;
    `}
`;

export const ConfirmButoon = styled.button`
  margin-top: 64px;

  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3cdc8c;
  border-radius: 20px;
  color: #ffffff;
  font-weight: 800;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: background-color 0.2s;

  svg {
    margin-right: 16px;
  }

  :hover {
    background: #36cf82;
  }
`;
