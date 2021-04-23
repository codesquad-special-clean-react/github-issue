import { SubNavTab, StyledNewButton } from 'components';
import { useState } from 'react';
import styled from 'styled-components';
import SubHeaderForm from './SubmitForm';

const SubHeader = () => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);

  return (
    <>
      <SubHeaderBlock>
        <SubNavTab />
        <StyledNewButton onClick={onOpen} disabled={!onOpen} />
      </SubHeaderBlock>
      {open && <SubHeaderForm />}
    </>
  );
};

const SubHeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
`;

export default SubHeader;
