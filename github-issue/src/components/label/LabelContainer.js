import LabelItem from "./LabelItem";
import React from 'react';
import {List, ListTitle} from "../templates/Common"

const LabelContainer = ({param:{labels, labelsLength, editLabelAPI, deleteLabelAPI} }) => {

	return (
		<List>
			<ListTitle>{ labelsLength } labels</ListTitle>
			<LabelItem
				labels={ labels }
				editLabelAPI={ editLabelAPI }
				deleteLabelAPI={ deleteLabelAPI }/>
		</List>
	);
};

export default LabelContainer;