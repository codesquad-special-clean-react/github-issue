import React, {useEffect} from "react";
import styled from "styled-components";
import DueDate from "../templates/DueDate";
import {GetDate} from "../../util/GetDate";
import {Link} from "react-router-dom";
const MilestoneItem = ({milestones}) => {

  const onClickEdit = () => {

  }

  useEffect(() => {
  }, []);

  let items = (milestones.length > 0) && milestones.map( ({ id, title, dueDate, desc, issueCnt, closedIssueCnt }) => {
    let progressPercent = Math.floor((closedIssueCnt/issueCnt)*100);
    progressPercent = isNaN(progressPercent)? 0 : progressPercent;

      return (
        <Milestone key={ id }>
          <div className="milestoneInfo">
            <Title>{ title }</Title>
            <DueDate>{ GetDate(dueDate) }</DueDate>
            <Desc>{ desc }</Desc>
          </div>
          <div>
            <ProgressBarContainer>
              <ProgressBar style={{width: progressPercent+"%"}}></ProgressBar>
            </ProgressBarContainer>
            <br/>

            <Chart>{progressPercent}% complete    {issueCnt-closedIssueCnt} open    {closedIssueCnt} closed</Chart>
            <Buttons>
              <Link to={ "/new/" + id }><Button color="blue" >Edit</Button></Link>
              <Button color="blue">Close</Button>
              <Button color="red">Delete</Button>
            </Buttons>
          </div>
         </Milestone>
      )
  });

  return <>{items}</>;
}

export default MilestoneItem;

const ProgressBarContainer = styled.div`
  width: 100%;  
  background: #eaecef;
`

const ProgressBar = styled.div`
  height: 10px;
  background: #31c553;
`;

const Milestone = styled.div`
  padding: 20px;
  border-bottom: 1px solid #e3e6e9;
  
  display: flex;
  & .milestoneInfo {flex:1}
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

const Chart = styled.div`
  width: 400px;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.div`
  margin: 10px 10px 0 0;
  cursor: pointer;
  
  ${({color}) => {
      if (color === "blue") return `color: #356ed6`
      else if (color === "red") return `color: #d63535`
    }
  }
`;





