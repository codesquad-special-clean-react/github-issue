import React, {useState} from "react";
import NewLabel from "./NewLabel";
import styled from "styled-components";
import {labelUrl} from "../../api/ApiUrl";

function LabelItem({labels, editLabelAPI, deleteLabelAPI}) {
	const [editId, setEditId] = useState(null);

	const onClickDelete = async ({currentTarget}) => {
		const id = currentTarget.dataset.id;

		deleteLabelAPI(labelUrl, id);
	}

	const onClickEdit = ({target}) => {
		if (editId) {
			setEditId(null);
		} else {
			const targetId = target.dataset.id;
			setEditId(targetId);
		}
	}

	const editCallBack = () => {
		setEditId(null);
	}

	let items = (labels.length > 0) && (
		labels.map(({id, name, desc, color}) => {
			return (
				<LabelItemContainer key={id} data-id={id}>
					<LabelInfoForm>
						<LabelName>
							<LabelNameTag bgColor={color}>{name}</LabelNameTag>
						</LabelName>

						<LabelDescription>{desc}</LabelDescription>
						<LabelButtons>
							<Button onClick={onClickEdit} data-id={id}>Edit</Button>
							<Button onClick={onClickDelete} data-id={id}>Delete</Button>
						</LabelButtons>
					</LabelInfoForm>

					{Number(editId) === id && <NewLabel insertType="EDIT_LABEL"
																							callBack={editCallBack}
																							editLabelAPI={editLabelAPI}
																							param={{id, name, desc, color}}/>}
				</LabelItemContainer>
			)
		})
	);

	return (
		<>{items}</>
	);
}

export default LabelItem;

const LabelItemContainer = styled.li`
  padding: 20px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e3e6e9;
  
  &: last-child {
    border-bottom: none;
  }
`;

const LabelInfoForm = styled.li`
  flex: 1;
  display: flex;
`;

const LabelName = styled.div`
  flex: 1;
  display: flex;
`;

const LabelNameTag = styled.div`
  padding: 2px 10px 4px 10px;
  font-weight: bold;
  color: #ffffff;
  border-radius: 5px;
  background-color: ${props => props.bgColor}
`;

const LabelDescription = styled.div`
  flex: 5;
  color: #747b83;
`;

const LabelButtons = styled.div`
  display: flex;
`;

const Button = styled.div`
  margin: 0 5px;
  color: #747b83;
  cursor: pointer;
`;





