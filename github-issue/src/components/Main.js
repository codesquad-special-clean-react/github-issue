import Header from "./label/Header";
import LabelContainer from "./label/LabelContainer";
import MilestoneContainer from "./milestone/MilestoneContainer";
import {getLabel, addLabels, editLabel, deleteLabel} from "../api/LabelApi";
import React, {useState, useEffect} from "react";
import {labelUrl} from "../api/ApiUrl";

const Main = () => {
	const [pageType, setPageType] = useState("label");
	const [labels, setLabels] = useState([]);
	const [labelsLength, setLabelsLength] = useState(0);

	const getLabels = async () => {
		let data = [];

		try {
			data = await getLabel(labelUrl);

			setLabels(data);
			setLabelsLength(data.length);
		}
		catch (error) {
			console.log("ERR :: ", error);
		}
	}

	const addLabelAPI = (url, params) => {
		addLabels(url, params);
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

	let labelPageParam = { labels,	labelsLength,	getLabels,	addLabelAPI,	editLabelAPI,	deleteLabelAPI }

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

