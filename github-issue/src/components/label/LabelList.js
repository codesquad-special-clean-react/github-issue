import React, {useEffect, useState} from "react";
import LabelItem from "./LabelItem";
import {addLabels, deteleLabel, editLabel, getLabel} from "../../api/LabelApi";
import Header from "./Header";
import styled from "styled-components";
import {labelUrl} from "../../api/ApiUrl";

function LabelList() {
	const [labels, setLabels] = useState([]);
	const [labelsLength, setLabelsLength] = useState(0);

	const getLabels = () => {
		getLabel(labelUrl)
			.then((data) => {
				setLabels(data);
				setLabelsLength(data.length);
			})
	}

	const addLabelAPI = (url, id) => {
		addLabels(url, id)
			.then((data) => getLabels())
	}

	const editLabelAPI = (url, id, param) => {
		editLabel(url, id, param)
			.then((data) => getLabels())
	}

	const deleteLabelAPI = (url, id) => {
		deteleLabel(url, id)
			.then((data) => getLabels())
	}

	useEffect(() => {
		getLabels();
	}, []);

	return (
		<LabelListContainer>
			<Header addLabelAPI={addLabelAPI}/>
			<List>
				<ListTitle>{labelsLength} labels</ListTitle>
				<LabelItem labels={labels} addLabelAPI={addLabelAPI} editLabelAPI={editLabelAPI} deleteLabel={deleteLabelAPI}/>
			</List>
		</LabelListContainer>
	);
}

export default LabelList;

const LabelListContainer = styled.div`
	padding: 3em 10% 0 10%;
`

const List = styled.ul`
	padding: 0px;
	list-style:none;
	border: 1px solid #e4e7ea;
	border-radius: 5px;
`

const ListTitle = styled.li`
	padding: 20px 20px;
	background-color: #f6f8fa;
	border-bottom: 1px solid #e3e6e9;
	font-weight: bold;
`
