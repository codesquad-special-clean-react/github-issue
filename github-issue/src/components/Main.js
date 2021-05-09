import Header from "./label/Header";
import NewMilestone from "./milestone/NewMilestone";
import LabelContainer from "./label/LabelContainer";
import MilestoneContainer from "./milestone/MilestoneContainer";

import {getLabel, addLabels, editLabel, deleteLabel} from "../api/LabelApi";
import {LabelListContainer} from "../components/templates/Common"

import React, {useState, useEffect} from "react";

const Main = () => {
	const [pageType, setPageType] = useState("label");
	const [labels, setLabels] = useState([]);
	const [labelsLength, setLabelsLength] = useState(0);

	const getLabels = async () => {
		const data = await getLabel("http://localhost:3001/labels");

		setLabels(data);
		setLabelsLength(data.length);
	}

	const addLabelAPI = (url, id) => {
		addLabels(url, id);
		getLabels();
	}

	const editLabelAPI = async (url, id, param) => {
		await editLabel(url, id, param);
		getLabels();
	}

	const deleteLabelAPI = async (url, id) => {
		await deleteLabel(url, id);
		getLabels();
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
		<>
			<Header addLabelAPI={addLabelAPI} setPageType={setPageType}/>

			{pageType === "label"
				? <LabelContainer param={labelPageParam}/>
				: <MilestoneContainer/>
			}
		</>
	);
}

export default Main;

