import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const Item = styled.li`
  position: relative;
  max-width: calc((100% - (29px * 3)) / 4);
`;
