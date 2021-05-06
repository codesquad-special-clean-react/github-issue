import React, {useEffect} from "react";
import styled from "styled-components";

const MilestoneItem = ({milestones}) => {
  console.log("milestones ", milestones)
     useEffect(() => {
     }, []);

    // const [editId, setEditId] = useState(null);
    //
    // const onClickDelete = async ({currentTarget}) => {
    //     const id = currentTarget.dataset.id;
    //
    //     deleteLabelAPI('http://localhost:3001/labels', id);
    // }
    //
    // const onClickEdit = ({target}) => {
    //     if (editId) {
    //         setEditId(null);
    //     }
    //     else {
    //         const targetId = target.dataset.id;
    //         setEditId(targetId);
    //     }
    // }
    //
    // const editCallBack = () => {
    //     setEditId(null);
    // }
  const getDate = (dueDate) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(dueDate);
    const monthName = monthNames[date.getMonth()];
    const getDate = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

    return `${monthName}, ${getDate}, ${date.getFullYear()}`;
  }

  let items = milestones.map( ({ id, title, dueDate, desc }) => {
      return (
        <Milestone key={id}>
          <MilestoneTitle>{title}</MilestoneTitle>
          <DueDate>Due by {getDate(dueDate)}</DueDate>
          <div>{ desc }</div>
              {/*<LabelInfoForm>*/}
              {/*    <LabelName>*/}
              {/*        <LabelNameTag bgColor={color}>{name}</LabelNameTag>*/}
              {/*    </LabelName>*/}

              {/*    <LabelDescription>{desc}</LabelDescription>*/}
              {/*    <LabelButtons>*/}
              {/*        <Button onClick={onClickEdit} data-id={id} >Edit</Button>*/}
              {/*        <Button onClick={onClickDelete} data-id={id}>Delete</Button>*/}
              {/*    </LabelButtons>*/}
              {/*</LabelInfoForm>*/}
              {/*{ Number(editId) === id && <NewLabel insertType="EDIT_LABEL" callBack={editCallBack} editLabelAPI={editLabelAPI} param={{ id, name, desc, color }}/>}*/}
         </Milestone>
      )
  });

  return (
      <>{items}</>
  );
}

export default MilestoneItem;

const Milestone = styled.div`
  margin: 20px;
`
const MilestoneTitle = styled.h2`
`

const DueDate = styled.div`
  margin: 10px 0;
  color:
`





