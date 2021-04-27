import styled from 'styled-components';

const MenuTab = () => {
  return (
    <MenuTabList>
      <li>Labels</li>
      <li>Milestones</li>
    </MenuTabList>
  );
};

const MenuTabList = styled.ul`
  display: flex;

  li {
    padding: 10px;
    background-color: #333;
    color: #fff;
    cursor: pointer;
  }
`;
export default MenuTab;
