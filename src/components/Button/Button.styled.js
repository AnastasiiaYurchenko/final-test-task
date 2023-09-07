import styled from 'styled-components';

export const ButtonLoad = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  font-family: inherit;
  text-decoration: underline;
  font-size: 16px;
  line-height: 1.5;
  font-style: normal;
  font-weight: 500;
  color: #3470ff;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 250ms;
  text-align: center;

  &:hover,
  &:focus {
    color: #0b44cd;
    transform: scale(1.2);
  }
`;
