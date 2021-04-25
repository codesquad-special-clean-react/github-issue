import styled from "styled-components";
import LabelItem from "./components/LabelItem";

export default function LabelList({ labelList }) {
  return (
    <LabelListWrapper>
      <LabelTitle>{labelList.length} labels</LabelTitle>
      <LabelItem labelList={labelList} />
    </LabelListWrapper>
  );
}

const LabelListWrapper = styled.dl`
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 3px;

  dt,
  dd {
    padding: 15px;
  }

  dd + dd {
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
  }
`;

const LabelTitle = styled.dt`
  background: ${({ theme }) => theme.colors.lightGrey};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
`;
