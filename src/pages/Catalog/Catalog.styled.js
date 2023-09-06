import styled from 'styled-components';

export const CarsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const CarItem = styled.li`
  max-width: calc((100% - (29px * 3)) / 4);
`;

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
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 28px;
  overflow: hidden;
  /* text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; */
  /* -webkit-box-orient: vertical; */
`;

export const Text = styled.p`
  font-size: 12px;
  font-weight: 400px;
  line-height: calc(18 / 12);
  color: #121417;
  opacity: 0.5;
`;

// .mob-socials__item:not(:last-child)::after {
//   content: "";

//   display: inline-block;

//   width: 2px;

//   height: 22px;

//   background-color: rgba(33,33,33,.2);

//   margin: 0 10px;

export const Image = styled.img`
  display: block;
  border-radius: 14px;
  height: 268px;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const BtnLearnMore = styled.button`
  display: inline-block;
  padding: 12px 100px;
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
