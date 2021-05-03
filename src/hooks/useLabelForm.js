import { useContext, useState } from 'react';
import { LabelContext } from '../context/LabelContext';
import { requestLabels } from '../utils/api';
import { getRandomColor } from '../utils/utils';

const useLabelForm = (
  initId,
  initLabelName,
  initDescription,
  initLabelColor,
  handleSubmit
) => {
  const [labelName, setLabelName] = useState(initLabelName);
  const [description, setDescription] = useState(initDescription);
  const [labelColor, setLabelColor] = useState(initLabelColor);
  const { dispatch } = useContext(LabelContext);

  const handleInputChange = (setState) => ({ target }) =>
    setState(target.value);

  const handleLabelNameInputChange = handleInputChange(setLabelName);
  const handleDescriptionInputChange = handleInputChange(setDescription);
  const handleColorInputChange = handleInputChange(setLabelColor);

  const handleRandomizeLabelColor = () => setLabelColor(getRandomColor());

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

  return [
    labelName,
    description,
    labelColor,
    handleLabelNameInputChange,
    handleDescriptionInputChange,
    handleColorInputChange,
    handleRandomizeLabelColor,
    handleSubmitForm,
  ];
};

export default useLabelForm;
