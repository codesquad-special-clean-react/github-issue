import { SubNavTab, StyledNewButton } from 'components';
import styled from 'styled-components';

const SubHeader = () => {
  return (
    <SubHeaderBlock>
      <SubNavTab />
      <StyledNewButton />
    </SubHeaderBlock>
  );
};

const SubHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default SubHeader;
