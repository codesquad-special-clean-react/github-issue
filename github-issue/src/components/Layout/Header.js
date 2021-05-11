import styled from 'styled-components';
import Icon from '../../icons';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 20px 0 20px 0;
  background-color: black;
`;

const HeaderContent = styled.p`
  font-size: 24px;
  color: white;
  margin: 0 0 0 0;
  font-weight: bold;
`;

const Header = ({ message, iconName }) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        {Icon(iconName)}
        {message}
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
