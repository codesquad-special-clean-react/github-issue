import React from 'react';
import styled from 'styled-components'

const Header = styled.div`
  padding: 2em;
  text-align: center;
  color: white;
  background: #242A2E;
`;

const IssuesHeader = ({ title = "ISSUES" }) => {
  return (
      <div>
        <Header>{title}</Header>
      </div>
  );
};

export default IssuesHeader;
