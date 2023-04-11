import styled, { css } from 'styled-components';

export const Description = styled.span`
  font-size: small;
`;

export const Button = styled.button`
  font-size: small;
  background-color: lightblue;
  border: none;
  border-radius: 4px;
  padding: 4px;

  &:hover {
    background-color: #bce8f8;
  }
  &:active {
    background-color: #87aab6;
  }
`;

export const Input = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  position: absolute;
`;

export const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 8px;
  margin-bottom: 8px;
`;

export const LabelText = styled.span`
  ${props => {
    switch (props.$mode) {
      case 'dark':
        // eslint-disable-next-line no-undef
        return css`
          background-color: black;
          color: white;
          ${Input}:checked + && {
            color: blue;
          }
        `;
      default:
        return css`
          background-color: white;
          color: black;
          ${Input}:checked + && {
            color: red;
          }
        `;
    }
  }}
`;
