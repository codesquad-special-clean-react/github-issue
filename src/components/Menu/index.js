import React, { useState } from 'react';
import styled from 'styled-components';
import MenuTab from './MenuTab';
import NewLabelButton from './NewLabelButton';
import NewLabel from '../NewLabel';

const Menu = ({ setStatus }) => {
  const [newLabel, setNewLabel] = useState(false);

  return (
    <>
      <MenuContainer>
        <MenuTab />
        <NewLabelButton newLabel={newLabel} setNewLabel={setNewLabel} />
      </MenuContainer>

      {newLabel && <NewLabel setNewLabel={setNewLabel} setStatus={setStatus} />}
    </>
  );
};

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 35px 0;
  background-color: #ccc;
`;
export default Menu;
