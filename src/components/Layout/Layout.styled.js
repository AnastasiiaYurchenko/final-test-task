import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 150px 128px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transition: all 250ms;

  &:hover,
  &:focus {
    color: white;
    background-color: #3470ff;
    transform: scale(1.1);
  }

  &.active {
    color: white;
    background-color: #3470ff;
  }
`;
