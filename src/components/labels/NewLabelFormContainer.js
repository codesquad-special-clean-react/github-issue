import React, { useContext } from 'react';
import { LabelContext } from '../../context/LabelContext';
import { requestAddLabel } from '../../utils/api';
import LabelForm from './LabelForm';
import * as Styled from './NewLabelFormContainer.style';

const NewLabelFormContainer = () => {
  const { labelState, dispatch } = useContext(LabelContext);
  const { isLabelFormOpen } = labelState;

  const handleRemoveLabelForm = () => dispatch({ type: 'CLOSE_LABEL_FORM' });

  const handleSubmitLabelForm = async (id, name, description, color) => {
    await requestAddLabel(id, name, description, color);
    dispatch({ type: 'CLOSE_LABEL_FORM' });
  };

  return (
    <Styled.LabelFormContainer className={isLabelFormOpen ? '' : 'hide'}>
      <Styled.LabelTitle>Label preview</Styled.LabelTitle>
      <LabelForm
        handleCancel={handleRemoveLabelForm}
        handleSubmit={handleSubmitLabelForm}
      />
    </Styled.LabelFormContainer>
  );
};

export default NewLabelFormContainer;
