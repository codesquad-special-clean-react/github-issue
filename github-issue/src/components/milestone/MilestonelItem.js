import React from "react";

const MilestoneItem = ({milestones}) => {
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

    let items = milestones.map( ({ id, name, desc, color }) => {
        return (
            <>
                <div key={id} data-id={id}>
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
                </div>
             </>
        )
    });

    return (
        <>{items}</>
    );
}

export default MilestoneItem;







