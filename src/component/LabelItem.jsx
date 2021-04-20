import React from 'react';
import styled from "styled-components";

const LabelItem = ({ label }) => {
  return (
      <Label>
        <Name>
          <Color color={label.color}>{label.name}</Color>
        </Name>
        <Description>{label.description}</Description>
        <Button>
          <ButtonLabel>Edit</ButtonLabel>
        </Button>
        <Button>
          <ButtonLabel>Delete</ButtonLabel>
        </Button>
      </Label>
  );
};

const Label = styled.div`
border: 1px solid #CCC;
`

const Name = styled.div`
width: calc(20% - 2em);
display: inline-block;
padding: 1em;
`

const Color = styled.div`
background-color: ${props => props.color};
display: inline-block;
padding: 0.5em;
font-weight: bold;
`

const Description = styled.div`
width: 65%;
display: inline-block;
color: #555;
`

const Button = styled.div`
width: calc(7.5% - 2em);
display: inline-block;
padding: 1em;
text-align: center;
`

const ButtonLabel = styled.label`
cursor: pointer;
color: #555;
`

export default LabelItem;
