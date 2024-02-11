import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const LinkItem = styled.li`
  padding: 1rem 0;
`;

export const LinkList = styled.ul`
  display: flex;
  list-style: none;
  gap: 3rem;

  border: 0.3rem solid blue;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding: 1rem 0;
  font-weight: 500;
  font-size: 20px;

  &:hover,
  :focus {
    color: darkred;
  }
`;
