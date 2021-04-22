import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import LabelList from "../LabelList";
import {getLabels} from "../../api/issueApi";

const IssuesContents = () => {
  const [isActiveLabels, setIsActiveLabels] = useState(false)
  const [isActiveMilestones, setIsActiveMilestones] = useState(false)
  const [labels, setLabels] = useState([])

  useEffect(() => {
    const fetchLabels = async () => {
      const data = await getLabels()
      console.log(data)
      setLabels(() => data)
    }
    fetchLabels()
  }, [])

  const onClickLabels = () => {
    setIsActiveLabels(() => true)
    setIsActiveMilestones(() => false)
  }

  const onClickMilestones = () => {
    setIsActiveMilestones(() => true)
    setIsActiveLabels(() => false)
  }

  return (
      <Container>
        <TabButton active={isActiveLabels} onClick={() => onClickLabels()}>Labels</TabButton>
        <TabButton active={isActiveMilestones} onClick={() => onClickMilestones()}>Milestones</TabButton>
        <CreateButton>New label</CreateButton>

        <LabelList labels={labels}/>
      </Container>
  );
};

const Container = styled.section`
padding: 3em 10em;
`

const TabButton = styled.button`
padding: 1em;
border: 1px solid;
background-color: ${props => props.active ? "#1265D6" : "white"};
color: ${props => props.active ? "white" : "black"};
margin-right: 1em;
`

const CreateButton = styled.button`
padding: 1em;
border: none;
background-color: #2CB44B;
color: white;
position: absolute;
right: 12em;
`

export default IssuesContents;
