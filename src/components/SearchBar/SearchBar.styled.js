import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 50px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #8a8a89;
  font-size: 14px;
  line-height: 1.29;
  font-weight: 500;

  &:first-child {
    width: 224px;
  }
  &:nth-child(2) {
    width: 125px;
  }
`;

export const InputField = styled.input`
  display: inline-block;
  padding: 14px 18px;
  background-color: #f7f7fb;
  border-radius: 14px;
  border: none;
  font-size: 18px;
  line-height: 1.11;
  color: #121417;
`;

export const WrapInputes = styled.span`
  & > :first-child {
    width: 160px;
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }

  & > :last-child {
    width: 160px;
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
  }
`;

export const BtnSearch = styled.button`
  font-family: 'Manrope', sans-serif;
  display: block;
  padding: 14px 44px;
  border-radius: 14px;
  border: none;
  background-color: #3470ff;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.43;
  font-weight: 600;
  cursor: pointer;
  transition: all 250ms;

  &:hover {
    background-color: #0b44cd;
  }
`;
