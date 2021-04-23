import { Link, useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { TABS_NAMES } from 'utils/constants';
import { LabelIcon, MilestoneIcon } from '../Icons';

const SubNavTab = () => {
  const { pathname } = useLocation();

  return (
    <SubNavBlock>
      {TABS_NAMES.map((name, index) => {
        const isMatched = pathname.slice(1) === name.toLowerCase();
        return (
          <SubNavItem isActive={isMatched} key={index}>
            <SubNavLink to={`/${name.toLowerCase()}`}>
              <SubNavIcon name={name} isMatched={isMatched} />
              {name}
            </SubNavLink>
          </SubNavItem>
        );
      })}
    </SubNavBlock>
  );
};

const SubNavIcon = ({ name, isMatched }) => {
  return (
    <>
      {name === 'Labels' ? (
        <LabelIcon fill={isMatched ? 'white' : 'black'} />
      ) : (
        <MilestoneIcon fill={isMatched ? 'white' : 'black'} />
      )}
    </>
  );
};

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

export default SubNavTab;
