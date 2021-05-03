import { RefreshIcon } from '../../assets/icons';
import useLabelForm from '../../hooks/useLabelForm';
import { getRandomColor, getRandomId, getTextColor } from '../../utils/utils';
import Button from '../common/Button';
import * as Styled from './LabelForm.style';

const LabelForm = ({
  initId = getRandomId(),
  initLabelName = '',
  initDescription = '',
  initLabelColor = getRandomColor(),
  handleCancel,
  handleSubmit,
}) => {
  const [
    labelName,
    description,
    labelColor,
    handleLabelNameInputChange,
    handleDescriptionInputChange,
    handleColorInputChange,
    handleRandomizeLabelColor,
    handleSubmitForm,
  ] = useLabelForm(
    initId,
    initLabelName,
    initDescription,
    initLabelColor,
    handleSubmit
  );

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
              onClick={handleRandomizeLabelColor}
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
          <Button buttonTitle="Cancel" />
        </div>
        <div className="create_button button" onClick={handleSubmitForm}>
          <Button
            buttonTitle={initLabelName ? 'Save changes' : 'Create label'}
            isPrimary={true}
            isDisabled={!labelName.length}
          />
        </div>
      </Styled.ButtonContainer>
    </Styled.Form>
  );
};

export default LabelForm;
