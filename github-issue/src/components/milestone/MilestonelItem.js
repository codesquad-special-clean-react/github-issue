import React, {useEffect} from "react";
import styled from "styled-components";
import DueDate from "../templates/DueDate";
import {GetDate} from "../../util/Date";

const MilestoneItem = ({milestones}) => {

   useEffect(() => {
   }, []);

  let items = milestones.map( ({ id, title, dueDate, desc }) => {
      return (
        <Milestone key={ id }>
          <Title>{ title }</Title>
          <DueDate>{ GetDate(dueDate) }</DueDate>
          <Desc>{ desc }</Desc>
         </Milestone>
      )
  });

  return (
      <>{items}</>
  );
}

export default MilestoneItem;

const Milestone = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e3e6e9
`
const Title = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`
const Desc = styled.div`
  margin-bottom: 10px;
  color:
`





