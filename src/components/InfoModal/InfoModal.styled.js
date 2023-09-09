import styled from 'styled-components';
import { ReactComponent as CloseX } from '../../images/svg/close.svg';

export const ModalContent = styled.div`
  position: relative;
`;

export const Image = styled.img`
  display: block;
  border-radius: 14px;
  height: 248px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const TextTitles = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  color: #121417;
  margin-bottom: 8px;
`;

export const TextModel = styled.span`
  color: #3470ff;
`;

export const WrapInfo = styled.div`
  margin-bottom: 14px;
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: calc(18 / 12);
  color: #121417;
  opacity: 0.5;

  &:not(:last-child)::after {
    content: '';
    display: inline-block;
    width: 1px;
    height: 16px;
    background-color: #121417;
    opacity: 0.1;
    margin: 0 6px;
    vertical-align: middle;
  }
`;

export const TopWrapInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 4px;
`;
export const BottomWrapInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font-size: 14px;
  line-height: 1.43;
  font-weight: 400;
  color: #121417;
  margin-bottom: 24px;
`;

export const Title = styled.p`
  font-size: 14px;
  line-height: 1.43;
  font-weight: 500;
  color: #121417;
  margin-bottom: 8px;
`;

export const ConditionsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const Condition = styled.p`
  background-color: #f9f9f9;
  border-radius: 35px;
  padding: 7px 14px;
  color: #363535;
  font-size: 12px;
  line-height: 1.5;
  font-weight: 400;
`;

export const ConditionAccent = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const BtnRental = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  padding: 12px 50px;
  border-radius: 12px;
  background-color: #3470ff;
  color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 600;
  transition: all 250ms;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;

export const Close = styled(CloseX)`
  fill: #121417;
  position: absolute;
  top: -24px;
  right: -24px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: all 250ms;

  &:hover,
  &:focus {
    fill: black;
    transform: scale(1.2);
  }
`;
