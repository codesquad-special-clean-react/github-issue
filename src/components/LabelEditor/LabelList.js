import styled from 'styled-components';
import Label from '../Label';

const LabelList = ({ labelList }) => {
  return (
    <LabelListBlock>
      <LabelListHeader>8 labels</LabelListHeader>
      <ul>
        {labelList.map(Item => (
          <Label Item={Item} />
        ))}
      </ul>
    </LabelListBlock>
  );
};

const LabelListBlock = styled.div`
  border: 1px solid #ccc;
`;

const LabelListHeader = styled.div`
  padding: 20px 15px;
  border-bottom: 1px solid #ccc;
`;

export default LabelList;
