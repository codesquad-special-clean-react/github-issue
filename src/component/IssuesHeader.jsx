import React from 'react';
import styled from 'styled-components'
import {GoRepo} from "react-icons/all";

const IssuesHeader = ({ title = "ISSUES" }) => {
  return (
      <div>
        <Header>
          <GoRepo color={"#AAA"}/>
          <Title>{title}</Title>
        </Header>
      </div>
  );
};

const Header = styled.div`
  padding: 2em;
  text-align: center;
  background: #242A2E;
`;

const Title = styled.span`
  padding: 0.3em;
  color: white;
`

export default IssuesHeader;
