import styled from "styled-components";

export default function LabelItem({ labelList }) {
  return (
    <>
      {labelList.map(({ name, theme, desc }) => {
        return (
          <>
            <LabelItemWrapper>
              <PreViewLabel>
                <Label color={theme}>{name}</Label>
              </PreViewLabel>
              <LabelDesc>{desc}</LabelDesc>
              <LabelEditBtnWrap>
                <LabelEditBtn>Edit</LabelEditBtn>
                <LabelEditBtn>Delete</LabelEditBtn>
              </LabelEditBtnWrap>
            </LabelItemWrapper>
          </>
        );
      })}
    </>
  );
}

const LabelItemWrapper = styled.dd`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Label = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  background: #de4d4d;
  font-size: 14px;
`;

const PreViewLabel = styled.div`
  width: 25%;
`;

const LabelDesc = styled.p`
  width: 45%;
`;

const LabelEditBtnWrap = styled.div`
  width: 10%;
  display: flex;
  justify-content: flex-end;

  > button:last-child {
    margin-left: 15px;
  }
`;

const LabelEditBtn = styled.button`
  background: none;
  border: none;
`;
