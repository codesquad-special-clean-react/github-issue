import React from 'react';
import { LabelContextProvider } from '../../context/LabelContext';
import * as Styled from './LabelContainer.style';
import LabelListContainer from './LabelListContainer';
import NewLabelButton from './NewLabelButton';
import NewLabelFormContainer from './NewLabelFormContainer';

const LabelContainer = () => {
  return (
    <LabelContextProvider>
      <Styled.Container>
        <NewLabelButton />
        <NewLabelFormContainer />
        <LabelListContainer />
      </Styled.Container>
    </LabelContextProvider>
  );
};

export default LabelContainer;
