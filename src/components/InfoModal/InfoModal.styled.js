import styled from 'styled-components';
import { ReactComponent as CloseX } from '../../images/svg/close.svg';

export const ModalContent = styled.div`
  /* position: relative;
  max-width: 541px;
  max-height: 752px;
  border-radius: 24px; */
`;

export const Image = styled.img`
  position: relative;
`;

export const Close = styled(CloseX)`
  fill: #121417;
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
`;
