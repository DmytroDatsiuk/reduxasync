import styled from 'styled-components';

export const Buttons = styled.button`
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  background-color: lightblue;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  padding: 10px;

  &:hover {
    background-color: #bce8f8;
  }
  &:active {
    background-color: #93b0c7;
  }
`;

export const SelectedButton = styled(Buttons)`
  color: white;
  background-color: #056383;
`;
