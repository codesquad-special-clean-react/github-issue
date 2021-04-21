import React from "react";
import styled from "styled-components";

const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
`;

const DialogBlock = styled.div`
  width: 320px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;
  h3 {
    margin: 0;
    font-size: 1.5rem;
  }
  p {
    font-size: 1.125rem;
  }
`;

const ButtonGroup = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  cursor: pointer;

  &:hover {
    color: grey;
  }
  & + & {
    margin-left: 0.5rem;
  }
`;

function Dialog({ visible, handleCancel, handleConfirm }) {
  if (!visible) return null;

  return (
    <DarkBackground>
      <DialogBlock>
        <h3>“정말 이 레이블을 삭제하시겠습니까?”</h3>
        <ButtonGroup>
          <Button onClick={handleCancel}>취소</Button>
          <Button onClick={handleConfirm}>확인</Button>
        </ButtonGroup>
      </DialogBlock>
    </DarkBackground>
  );
}

export default Dialog;
