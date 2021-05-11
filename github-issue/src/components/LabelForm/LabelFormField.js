import { getRandomColor } from '../../utils';
import styled from 'styled-components';
import { usePostData } from '../../hooks';
import { useState } from 'react';
import LabelInputField from './LabelInputField';
import LabelColorField from './LabelColorField';
import LabelButtonField from './LabelButtonField';

const LabelForm = styled.form`
  width: 100%;
  margin-top: 25px;
`;

const LabelFormWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const LabelFormField = ({ url, onSubmit, name, setName, color, setColor }) => {
  const [description, setDescription] = useState('');
  const { pending, error, run: postLabel } = usePostData();
  const resetFormField = () => {
    setName(() => '');
    setDescription(() => '');
    setColor(() => 'black');
  };
  return (
    <LabelForm>
      <LabelFormWrapper>
        <LabelInputField
          label={'label name'}
          data={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <LabelInputField
          label="description"
          data={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <LabelColorField
          label="color"
          data={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          onClick={(e) => {
            e.preventDefault();
            setColor(getRandomColor());
          }}
        />
        <div>
          <LabelButtonField
            label="cancel"
            onClick={(e) => {
              e.preventDefault();
              resetFormField();
            }}
            disabled={false}
          />
          <LabelButtonField
            label="create label"
            disabled={name === '' ? true : false}
            style={{
              marginLeft: '5px',
              color: 'white',
              backgroundColor: 'darkgreen',
              opacity: name === '' ? '0.1' : '1',
            }}
            onClick={async (e) => {
              e.preventDefault();
              await postLabel(url, { name, description, color });
              resetFormField();
              await onSubmit(url);
            }}
          />
        </div>
      </LabelFormWrapper>
    </LabelForm>
  );
};

export default LabelFormField;
