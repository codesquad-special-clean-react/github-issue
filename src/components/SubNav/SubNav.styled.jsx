import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const SubNavBlock = styled.nav`
  display: flex;
  width: 120px;
  border-radius: 12px;
`;

const SubNavItem = styled.div`
  display: flex;
  border: 1px solid lightgrey;

  ${({ isActive }) =>
    isActive &&
    css`
      background-color: #0366d6;
      a {
        color: white !important;
      }
    `}

  &:first-child {
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    border-right: none;
  }
  &:last-child {
    border-bottom-right-radius: 12px;
    border-top-right-radius: 12px;
    border-left: none;
  }
`;

const SubNavLink = styled(Link)`
  display: flex;
  padding: 6px 9px;
`;

export { SubNavBlock, SubNavItem, SubNavLink };
