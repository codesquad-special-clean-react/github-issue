/* eslint-disable no-tabs */
import { useState } from 'react';
import {
  NewLabelBlock,
  LabelPreviewBlock,
  NewLabelContainer,
  DescWrapper,
  ColorInputWrapper,
  LabelWrapper
} from './index.styles';
import colorList from '../../constants/colorList';
import { postLabels } from '../../service/api';
import LabelItem from '../Label/LabelItem';

const initState = {
  name: '',
  desc: '',
  color: {
    fontColor: '#111',
    bgColor: '#98c9d4'
  }
};

const NewLabel = ({ setNewLabel, setStatus }) => {
  const [labelInput, setLabelInput] = useState(initState);

  const changeInputValue = ({ target: { name, value } }) => {
    setLabelInput({
      ...labelInput,
      [name]: value
    });
  };

  const randomColor = () => {
    const randomNumber = Math.floor(Math.random() * 6);

    setLabelInput({
      ...labelInput,
      color: colorList[randomNumber]
    });
  };

  const addLabel = async () => {
    setStatus(prev => ({
      ...prev,
      loading: true
    }));

    try {
      const res = await postLabels(labelInput);

      setStatus(prev => ({
        ...prev,
        loading: false
      }));

      setLabelInput(initState);
    } catch (e) {
      setStatus(prev => ({
        ...prev,
        loading: false,
        error: e
      }));
    }
  };

  return (
    <NewLabelBlock>
      <LabelPreviewBlock>
        <LabelItem
          color={labelInput.color}
          name={labelInput.name || 'Label preview'}
        />
      </LabelPreviewBlock>

      <NewLabelContainer>
        <LabelWrapper>
          <label htmlFor="name">Label name</label>
          <input
            type="text"
            name="name"
            placeholder="Label name"
            onChange={changeInputValue}
            value={labelInput.name}
          />
        </LabelWrapper>
        <DescWrapper>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            placeholder="Description (optional)"
            onChange={changeInputValue}
            value={labelInput.desc}
          />
        </DescWrapper>
        <LabelWrapper>
          <label htmlFor="color">Color</label>
          <ColorInputWrapper>
            <button onClick={randomColor}>R</button>
            <input
              type="text"
              name="color"
              placeholder="Color"
              onChange={changeInputValue}
              value={labelInput.color.bgColor}
            />
          </ColorInputWrapper>
        </LabelWrapper>

        <button onClick={() => setNewLabel(false)}>Cancel</button>
        <button onClick={addLabel}>Create label</button>
      </NewLabelContainer>
    </NewLabelBlock>
  );
};

export default NewLabel;
