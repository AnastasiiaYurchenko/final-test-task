import styled from 'styled-components';
import bgImage from 'images/bg-car.jpg';

export const Section = styled.div`
  height: 1000px;
  padding: 40px;
  background-image: linear-gradient(
      rgba(47, 48, 58, 0.2),
      rgba(47, 48, 58, 0.2)
    ),
    url(${bgImage});
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 36px;
  text-align: center;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 18px;
`;
