import React from 'react';
import { LabelContextProvider } from '../../context/LabelContext';
import LabelForm from './LabelForm';
import LabelListContainer from './LabelListContainer';

const LabelContainer = () => {
  return (
    <LabelContextProvider>
      <LabelForm />
      <LabelListContainer />
    </LabelContextProvider>
  );
};

export default LabelContainer;
