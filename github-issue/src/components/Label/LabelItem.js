import styled from 'styled-components';
import LabelDesc from './LabelDesc';
import LabelItemController from './LabelItemController';
import Label from './Label';
import { useToggle } from '../../hooks';
import Modal from '../Modal';
import LabelEditor from '../LabelForm/LabelEditor';

const LabelItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px 10px 10px;
  width: 100%;
  height: 75px;
  border: 1px solid black;
`;

const LabelItemSubWrapper = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
`;

const LabelItem = ({
  id,
  message,
  labelName,
  buttonColor,
  fontColor,
  onEditBtnClick,
  onDeleteBtnClick,
}) => {
  const [isDelBtnClick, setIsDelBtnClick] = useToggle(false);
  const [isEditBtnClick, setIsEditBtnClick] = useToggle(false);
  return (
    <>
      {isDelBtnClick && (
        <Modal
          msg="정말 삭제하시겠습니까?"
          onConfirm={onDeleteBtnClick}
          onCancel={setIsDelBtnClick}
        />
      )}
      {isEditBtnClick ? (
        <LabelEditor
          labelId={id}
          onSubmit={onEditBtnClick}
          onCancel={setIsEditBtnClick}
          labelName={labelName}
          labelColor={buttonColor}
          labelDesc={message}
        />
      ) : (
        <LabelItemWrapper>
          <Label
            message={labelName}
            fontColor={fontColor}
            buttonColor={buttonColor}
          />
          <LabelItemSubWrapper>
            <LabelDesc message={message} />
            <LabelItemController
              onEditBtnClick={setIsEditBtnClick}
              onDeleteBtnClick={setIsDelBtnClick}
            />
          </LabelItemSubWrapper>
        </LabelItemWrapper>
      )}
    </>
  );
};

export default LabelItem;
