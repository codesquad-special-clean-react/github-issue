import { useState } from "react";
import styled from "styled-components";
import LabelEdit from "../components/LabelEdit";
import { updateLabelData } from "api";

export default function LabelItem({ label }) {
  const [isLabelEditOpen, setIsLabelEditOpen] = useState(false);
  const [editLabelInfo, setEditLabelInfo] = useState({
    id: label.id,
    name: label.name,
    theme: label.theme,
    desc: label.desc,
  });

  const { id, name, theme, desc } = editLabelInfo;

  const openLabelEditForm = () => setIsLabelEditOpen(!isLabelEditOpen);

  const editLabelInputHandler = ({ target: { value, name } }) => {
    setEditLabelInfo({
      ...editLabelInfo,
      [name]: value,
    });
  };

  const editLabelSubmit = async () => {
    await updateLabelData({ id, name, theme, desc });

    alert("라벨이 수정되었습니다.");
    setIsLabelEditOpen(false);
  };

  return (
    <>
      <LabelItemWrapper key={id}>
        <LabelDetailWrapper>
          <PreViewLabel>
            <Label color={theme}>{name}</Label>
          </PreViewLabel>
          <LabelDesc>{desc}</LabelDesc>
          <LabelEditBtnWrap>
            <LabelEditBtn onClick={openLabelEditForm}>Edit</LabelEditBtn>
            <LabelEditBtn>Delete</LabelEditBtn>
          </LabelEditBtnWrap>
        </LabelDetailWrapper>

        {isLabelEditOpen && (
          <LabelEdit
            type="update"
            labelInfo={{
              name: editLabelInfo.name,
              theme: editLabelInfo.theme,
              desc: editLabelInfo.desc,
            }}
            labelInputHandler={editLabelInputHandler}
            labelSubmit={editLabelSubmit}
          />
        )}
      </LabelItemWrapper>
    </>
  );
}

const LabelItemWrapper = styled.dd`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  > div + div {
    margin-top: 25px;
  }
`;

const LabelDetailWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span`
  padding: 4px 10px;
  border-radius: 20px;
  background: ${({ color }) => color || "#ccc"};
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
