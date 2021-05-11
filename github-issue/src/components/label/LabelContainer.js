import LabelItem from "./LabelItem";
import React from 'react';
import {List, ListTitle} from "../templates/Common"

const LabelContainer = ({param: {labels, labelsLength, editLabelAPI, deleteLabelAPI}}) => {

	return (
		<List>
			<ListTitle>{labelsLength.labelsLength} labels</ListTitle>
			<LabelItem
				labels={labels.labels}
				editLabelAPI={editLabelAPI.editLabelAPI}
				deleteLabelAPI={deleteLabelAPI.deleteLabelAPI}/>
		</List>
	);
};

export default LabelContainer;