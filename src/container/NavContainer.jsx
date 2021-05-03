// external
import { useState, useContext, useCallback } from 'react';
import styled from 'styled-components';

//internal
import { CreateInfoState, CreateInfoDispatch } from '../Main';
import { postLabelData } from '../api/LabelApi';
import CreateLabelView from '../view/CreateLabelView';
import Button from '../components/Button';

const NavContainer = () => {
  const createInfoState = useContext(CreateInfoState);
  const dispatch = useContext(CreateInfoDispatch);

  const [labelOpen, setLabelOpen] = useState(false);

  const setRandomColor = useCallback((color) => {
    dispatch({
      type: 'CREATEINFO',
      randomColor: color,
    });
  }, []);

  const onChange = useCallback((e) => {
    const { value, name } = e.target;

    dispatch({
      type: 'CREATEINFO',
      labelName: name,
      desc: value,
    });
  }, []);

  const onSubmit = () => {
    postLabelData(createInfoState);
  };

  return (
    <NavWrapper>
      <Button backgroundColor="skyblue" size="19px" width="150px" color="black">
        Labels
      </Button>
      <Button backgroundColor="white" size="19px" width="150px" color="black">
        Milestones
      </Button>
      <CreateLabel>
        <Button backgroundColor="green" size="19px" width="150px" color="white" onClick={() => setLabelOpen(!labelOpen)}>
          New Labels
        </Button>
      </CreateLabel>
      {labelOpen && (
        <CreateLabelView
          createInfoState={createInfoState}
          setLabelOpen={setLabelOpen}
          setRandomColor={setRandomColor}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      )}
    </NavWrapper>
  );
};

export default NavContainer;

const NavWrapper = styled.div`
  margin: 0 0 30px 0;
`;

const CreateLabel = styled.div`
  float: right;
`;
