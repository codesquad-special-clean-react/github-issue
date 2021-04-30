import React, { useContext } from 'react';
import { LabelContext } from '../../context/LabelContext';
import LabelListContainer from './LabelListContainer';
import NewLabelFormContainer from './NewLabelFormContainer';
import Container from '../common/Container';

const LabelContainer = () => {
  const { dispatch } = useContext(LabelContext);
  const handleNewLabelButtonClick = () => dispatch({ type: 'OPEN_LABEL_FORM' });

  return (
    <Container buttonTitle="New Label" handleClick={handleNewLabelButtonClick}>
      <NewLabelFormContainer />
      <LabelListContainer />
    </Container>
  );
};

export default LabelContainer;
