import styled from 'styled-components';

const TR = styled.tr`
  position: relative;
  width: 100%;
  display: block;
  align-items: center;
`;

const LabelName = styled.div`
  width: 20%;

  & > span {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    color: white;
  }
`;

const Description = styled.div`
  width: 70%;
  display: ${({ isOpen }) => (isOpen ? 'none' : 'block')};

  & > div {
    font-weight: 600;
    color: $grey;
  }
`;

const ButtonContainer = styled.div`
  width: 10%;
  text-align: right;

  & > * {
    display: inline-block;
    margin: 5px;
    font-weight: 600;
    color: $grey;
    cursor: pointer;
  }

  & .edit {
    display: ${({ isOpen }) => (isOpen ? 'none' : 'inline-block')};
  }
`;

const LabelDataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LabelFormContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  margin-top: 20px;
`;

export {
  TR,
  LabelName,
  Description,
  ButtonContainer,
  LabelDataContainer,
  LabelFormContainer,
};
