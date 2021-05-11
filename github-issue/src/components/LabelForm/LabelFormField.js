import { getRandomColor } from '../../utils';
import styled from 'styled-components';
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

const LabelFormField = ({
  onSubmit,
  onCancel,
  name,
  setName,
  color = 'black',
  setColor,
  description,
  setDescription,
  labelId,
}) => {
  const resetFormField = () => {
    setName(() => '');
    setDescription(() => '');
    setColor(() => '');
  };
  const { url, write, refresh } = onSubmit;

  return (
    <LabelForm>
      <LabelFormWrapper>
        <LabelInputField
          label="Label name"
          placeHolder="Label name"
          data={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <LabelInputField
          label="Description"
          placeHolder="Description (optional)"
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
              onCancel();
            }}
            disabled={false}
          />
          <LabelButtonField
            label={labelId ? 'edit label' : 'create label'}
            disabled={name === '' ? true : false}
            style={{
              marginLeft: '5px',
              color: 'white',
              backgroundColor: 'green',
              opacity: name === '' ? '0.1' : '1',
            }}
            onClick={async (e) => {
              e.preventDefault();
              labelId
                ? await write(url, labelId, {
                    name,
                    description,
                    color,
                  })
                : await write(url, {
                    name,
                    description,
                    color,
                  });
              await refresh(url);
              resetFormField();
            }}
          />
        </div>
      </LabelFormWrapper>
    </LabelForm>
  );
};

export default LabelFormField;
