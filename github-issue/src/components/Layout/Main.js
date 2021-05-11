import Controller from '../Controller';
import Content from '../Content';
import { useState } from 'react';
import { useToggle } from '../../hooks';
import styled from 'styled-components';

const MainWrapper = styled.div`
  padding: 25px;
`;
const Main = () => {
  const [currentTab, setCurrentTab] = useState('labels');
  const [isNewBtnClick, setIsNewBtnClick] = useToggle();
  return (
    <MainWrapper>
      <Controller
        itemName={currentTab}
        onTabClick={setCurrentTab}
        onNewBtnClick={setIsNewBtnClick}
      />
      <Content
        tab={currentTab}
        isNewBtnClick={isNewBtnClick}
        onCancelBtnClick={setIsNewBtnClick}
      />
    </MainWrapper>
  );
};

export default Main;
