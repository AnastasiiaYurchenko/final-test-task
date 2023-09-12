import styled, { css } from 'styled-components';
import { ReactComponent as Heart } from '../../images/svg/heart.svg';

export const WrapTitles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const TextTitles = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  color: #121417;
`;

export const TextModel = styled.span`
  color: #3470ff;
`;

export const WrapInfo = styled.div`
  margin-bottom: 28px;
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
  margin-bottom: 4px;
`;
export const BottomWrapInfo = styled.div`
  display: flex;
`;

export const Image = styled.img`
  display: block;
  border-radius: 14px;
  height: 274px;
  width: 268px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const BtnLearnMore = styled.button`
  display: block;
  padding: 12px;
  width: 100%;
  border-radius: 12px;
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

export const HeartImg = styled(Heart)`
  position: absolute;
  top: 14px;
  right: 14px;
  width: 18px;
  height: 18px;
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  cursor: pointer;
  ${props =>
    props['data-isfavorite']
      ? css`
          fill: #3470ff;
          stroke: #3470ff;
        `
      : css`
          fill: transparent;
          stroke: rgba(255, 255, 255, 0.8);
        `}

  &:hover,
  &:focus {
    fill: #3470ff;
    stroke: #3470ff;
  }
`;
