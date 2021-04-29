import React, { useContext, useState } from 'react';
import LabelForm from './LabelForm';
import { requestDeleteLabel, requestUpdateLabel } from '../../utils/api';
import * as Styled from './LabelItem.style';
import { LabelContext } from '../../context/LabelContext';

const LabelItem = ({ id, name, description, color }) => {
  const { dispatch } = useContext(LabelContext);
  const [isOpen, setOpen] = useState(false);

  const handleEditButton = () => {
    setOpen(true);

    console.log(id, name, description, color);
  };

  const handleRemoveLabelForm = () => setOpen(false);

  const handleSubmitLabelForm = async (
    newId,
    newName,
    newDescription,
    newColor
  ) => {
    await requestUpdateLabel(newId, newName, newDescription, newColor);
    setOpen(false);
  };

  const handleDelete = async () => {
    await requestDeleteLabel(id);
    dispatch({ type: 'REMOVE_LABEL', payload: { id } });
  };

  return (
    <>
      <Styled.TR>
        <Styled.LabelDataContainer>
          <Styled.LabelName>
            <span style={{ background: color }}>{name}</span>
          </Styled.LabelName>
          <Styled.Description isOpen={isOpen}>
            <div>{description}</div>
          </Styled.Description>
          <Styled.ButtonContainer isOpen={isOpen}>
            <div className="edit" onClick={handleEditButton}>
              Edit
            </div>
            <div onClick={handleDelete}>Delete</div>
          </Styled.ButtonContainer>
        </Styled.LabelDataContainer>
        <Styled.LabelFormContainer isOpen={isOpen}>
          <LabelForm
            initLabelName={name}
            initDescription={description}
            initLabelColor={color}
            initId={id}
            handleCancel={handleRemoveLabelForm}
            handleSubmit={handleSubmitLabelForm}
          />
        </Styled.LabelFormContainer>
      </Styled.TR>
    </>
  );
};

export default LabelItem;
