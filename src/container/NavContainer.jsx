// external
import { useState } from "react";
import styled from "styled-components";

//internal
import { postLabelData } from "../api/LabelApi";
import CreateLabelView from "../view/CreateLabelView";
import Button from "../components/Button";

const NavContainer = () => {
  const [labelOpen, setLabelOpen] = useState(false);

  const [inputs, setInputs] = useState({
    labelName: "Label Priveiw",
    desc: "",
  });

  const [randomColor, setRandomColor] = useState("#ffffff");

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onSubmit = (e) => {
    postLabelData({ inputs, randomColor });
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
        <Button
          backgroundColor="green"
          size="19px"
          width="150px"
          color="white"
          onClick={() => setLabelOpen(!labelOpen)}
        >
          New Labels
        </Button>
      </CreateLabel>
      {labelOpen && (
        <CreateLabelView
          setLabelOpen={setLabelOpen}
          inputs={inputs}
          randomColor={randomColor}
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
