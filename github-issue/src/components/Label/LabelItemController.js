import styled from 'styled-components';

const LabelItemControllerWrapper = styled.div`
  display: flex;
`;

const LabelItemController = ({ onEditBtnClick, onDeleteBtnClick }) => {
  return (
    <LabelItemControllerWrapper>
      <button
        onClick={() => {
          onEditBtnClick();
        }}
      >
        Edit
      </button>
      <button
        onClick={() => {
          onDeleteBtnClick();
        }}
        style={{ marginLeft: '5px' }}
      >
        Delete
      </button>
    </LabelItemControllerWrapper>
  );
};

export default LabelItemController;
