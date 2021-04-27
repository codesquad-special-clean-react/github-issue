import React from 'react';
import { LabelContextProvider } from '../../context/LabelContext';
import LabelForm from './LabelForm';
import LabelListContainer from './LabelListContainer';

const LabelContainer = ({ isLabelFormOpen }) => {
  return (
    <LabelContextProvider>
      <LabelForm isLabelFormOpen={isLabelFormOpen} />
      <LabelListContainer />
    </LabelContextProvider>
  );
};

export default LabelContainer;
