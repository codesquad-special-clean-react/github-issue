// external
import {useState} from 'react';
import styled from 'styled-components';

// internal
import {postLabelData, deleteLabelData} from '../api/LabelApi';

import Button from '../components/Button';
import Label from '../components/Label';
import Input from '../components/Input';

/*
  setLabelOpen --> New Label 상태값 변경 prop
*/

const CreateLabelView = ({setLabelOpen}) => {
  const [inputs, setInputs] = useState({
    labelName: 'Label Priveiw',
    desc: '',
  });

  const [randomColor, setRandomColor] = useState('#ffffff');

  const onChange = e => {
    const {value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onSubmit = e => {
    postLabelData({inputs, randomColor});
  };

  const {labelName, desc} = inputs;

  return (
    <>
      <div style={{border: '1px red solid', margin: '20px 0'}}>
        <Label backgroundColor="skyblue" color="black" width="200px">
          {labelName}
        </Label>
        <AddLabelArea onSubmit={onSubmit}>
          <div>
            <h4>Label name</h4>
            <Input width="200px" type="text" name="labelName" value={labelName === 'Label Priveiw' ? '' : labelName} onChange={e => onChange(e)} />
          </div>
          <div>
            <h4>Description</h4>
            <Input width="300px" type="text" name="desc" value={desc} onChange={e => onChange(e)} />
          </div>
          <div>
            <h4>Color</h4>
            <span
              style={{width: '30px', height: '30px', color: 'black', display: 'inline-block', border: '1px solid orangered', cursor: 'pointer'}}
              onClick={() => setRandomColor('#' + Math.round(Math.random() * 0xffffff).toString(16))}
            >
              <img
                style={{display: 'inline-block', height: '20px'}}
                src="https://www.flaticon.com/svg/vstatic/svg/339/339853.svg?token=exp=1619334485~hmac=29006d6f583414a58fc8d22815497d51"
                alt=""
              />
            </span>
            <span width="auto" height="30px" color="black" style={{verticalAlign: 'top', marginLeft: '5px'}}>
              {randomColor}
            </span>
          </div>
          <div style={{position: 'absolute', right: 0}}>
            <Button width="auto" height="30px" color="black" onClick={() => setLabelOpen(false)}>
              Cancel
            </Button>
            <Button
              type="submit"
              width="auto"
              height="30px"
              color="white"
              backgroundColor="green"
              style={labelName === 'Label Priveiw' ? {pointerEvents: 'none', opacity: '0.3'} : {}}
            >
              Create label
            </Button>
          </div>
        </AddLabelArea>
      </div>
    </>
  );
};

export default CreateLabelView;

const AddLabelArea = styled.form`
  margin: 20px 0;
  border: 1px blue dashed;
  display: flex;
  position: relative;
`;
