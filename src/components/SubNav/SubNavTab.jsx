import { useLocation } from 'react-router-dom';
import { TABS_NAMES } from 'utils/constants';
import { LabelIcon, MilestoneIcon } from '../Icons';
import { SubNavLink, SubNavItem, SubNavBlock } from './SubNav.styled';

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

export default SubNavTab;
