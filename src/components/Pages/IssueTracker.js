import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../Header';
import Menu from '../Menu';
import LabelEditor from '../LabelEditor';

const IssueTracker = () => {
  const [status, setStatus] = useState({
    loading: false,
    error: null
  });

  return (
    <>
      <Header />
      <IssueTrackerContainer>
        <Menu status={status} setStatus={setStatus} />
        <LabelEditor status={status} setStatus={setStatus} />
      </IssueTrackerContainer>
    </>
  );
};

export const IssueTrackerContainer = styled.div`
  max-width: 970px;
  margin: 0 auto;
  background-color: #f4f4f4;
`;

export default IssueTracker;
