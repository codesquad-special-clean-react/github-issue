import React, { useContext, useState } from 'react';
import { RefreshIcon } from '../../assets/icons';
import { LabelContext } from '../../context/LabelContext';
import { requestLabels } from '../../utils/api';
import { getRandomColor, getRandomId, getTextColor } from '../../utils/utils';
import Button from '../common/Button';
import * as Styled from './LabelForm.style';

const LabelForm = ({
  initLabelName = '',
  initDescription = '',
  initLabelColor = getRandomColor(),
  initId = getRandomId(),
  handleCancel,
  handleSubmit,
}) => {
  const [labelName, setLabelName] = useState(initLabelName);
  const [description, setDescription] = useState(initDescription);
  const [labelColor, setLabelColor] = useState(initLabelColor);
  const { dispatch } = useContext(LabelContext);

  const buttonTitle = initLabelName ? 'Save changes' : 'Create label';

  const handleInputChange = (setState) => ({ target }) =>
    setState(target.value);

  const handleLabelNameInputChange = handleInputChange(setLabelName);
  const handleDescriptionInputChange = handleInputChange(setDescription);
  const handleColorInputChange = handleInputChange(setLabelColor);

  const handlRandomizeLabelColor = () => setLabelColor(getRandomColor());

  const initForm = () => {
    setLabelName('');
    setDescription('');
    setLabelColor(getRandomColor());
  };

  const handleSubmitForm = async () => {
    await handleSubmit(initId, labelName, description, labelColor);
    initForm();
    const newLabels = await requestLabels();
    dispatch({ type: 'UPDATE_LABELS', payload: { newLabels } });
  };

  return (
    <Styled.Form>
      <Styled.InputContainer className="label_name">
        <label>
          Label Name
          <input
            type="text"
            placeholder="Label name"
            value={labelName}
            onChange={handleLabelNameInputChange}
          ></input>
        </label>
      </Styled.InputContainer>
      <Styled.InputContainer className="description">
        <label>
          Description
          <input
            type="text"
            placeholder="Description (optional)"
            value={description}
            onChange={handleDescriptionInputChange}
          ></input>
        </label>
      </Styled.InputContainer>
      <Styled.InputContainer className="color">
        <label>
          Color
          <Styled.ColorContainer>
            <Styled.ColorButton
              backgroundColor={labelColor}
              onClick={handlRandomizeLabelColor}
            >
              <RefreshIcon color={getTextColor(labelColor)} />
            </Styled.ColorButton>
            <input
              type="text"
              value={labelColor}
              onChange={handleColorInputChange}
            ></input>
          </Styled.ColorContainer>
        </label>
      </Styled.InputContainer>
      <Styled.ButtonContainer>
        <div className="cancel_button button" onClick={handleCancel}>
          <Button text="Cancel" />
        </div>
        <div className="create_button button" onClick={handleSubmitForm}>
          <Button
            text={buttonTitle}
            isPrimary={true}
            isDisabled={!labelName.length}
          />
        </div>
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};

export default LabelForm;
