import Header from "./label/Header";
import LabelContainer from "./label/LabelContainer";
import MilestoneContainer from "./milestone/MilestoneContainer";
import {getLabel, addLabels, editLabel, deleteLabel} from "../api/LabelApi";
import {LabelListContainer} from "./common/common"
import React, {useState, useEffect} from "react";

const PageContents = () => {
	const [pageType, setPageType] = useState("label");
	const [labels, setLabels] = useState([]);
	const [labelsLength, setLabelsLength] = useState(0);

	const getLabels = () => {
		getLabel("http://localhost:3001/labels")
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
		deleteLabel(url, id)
			.then((data) => getLabels())
	}

	useEffect(() => {
		getLabels();
	}, []);

	const labelPageParam = {
		labels: {labels},
		labelsLength: {labelsLength},
		getLabels: {getLabels},
		addLabelAPI: {addLabelAPI},
		editLabelAPI: {editLabelAPI},
		deleteLabelAPI: {deleteLabelAPI},
	}

	return (
		<LabelListContainer>
			<Header addLabelAPI={addLabelAPI} setPageType={setPageType}/>

			{pageType === "label"
				? <LabelContainer param={labelPageParam} />
				: <MilestoneContainer/>
			}

		</LabelListContainer>
	);
}

export default PageContents;

