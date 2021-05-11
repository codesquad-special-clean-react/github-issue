import Controller from './Controller';
import Content from '../components/Content';
import { useState } from 'react';
import styled from 'styled-components';

const MainWrapper = styled.div`
  padding: 25px;
`;
const Main = () => {
  const [currentTab, setCurrentTab] = useState('labels');
  return (
    <MainWrapper>
      <Controller
        itemName={currentTab === 'labels' ? 'label' : 'milestone'}
        onClick={setCurrentTab}
      />
      <Content tab={currentTab} />
    </MainWrapper>
  );
};

export default Main;
