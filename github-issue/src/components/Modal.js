import styled from 'styled-components';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 500px;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.9);

  //ref: https://stackoverflow.com/questions/2005954/center-a-positionfixed-element
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  //
`;

const ModalMessageBox = styled.div`
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalMessage = styled.span`
  color: white;
`;

const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 50%;
`;

const ModalConfirmButton = styled.button`
  color: red;
`;
const ModalCancelMessage = styled.button`
  color: black;
`;

const Modal = ({ msg, onConfirm, onCancel }) => {
  return (
    <ModalWrapper>
      <ModalMessageBox>
        <ModalMessage>{msg}</ModalMessage>
      </ModalMessageBox>
      <ModalButtonWrapper>
        <ModalCancelMessage
          onClick={() => {
            onCancel();
          }}
        >
          취소
        </ModalCancelMessage>
        <ModalConfirmButton onClick={() => onConfirm()}>
          확인
        </ModalConfirmButton>
      </ModalButtonWrapper>
    </ModalWrapper>
  );
};
export default Modal;
