import React, {useEffect, useState} from 'react';
import NewLabel from "./NewLabel"
import styled from 'styled-components'
import {Link} from "react-router-dom";

function Header({addLabelAPI, setPageType}) {
	const [labelInputShow, setLabelInputShow] = useState(false);
	const [tabType, setTabType] = useState("label");

	const openNewLabel = () => setLabelInputShow(!labelInputShow);
	const openNewMilestone = () => {};

	const onClickTab = ({target}) => setTabType(target.getAttribute("type"));

	useEffect(() => {
		setPageType(tabType);
	}, [tabType])

	return (
		<>
			<TabButton type="label" tabType={tabType} onClick={onClickTab}>Labels</TabButton>
			<TabButton type="milestone" tabType={tabType} onClick={onClickTab}>Milestones</TabButton>

			{(tabType === "label")
				? <NewLabelButton color="green" onClick={openNewLabel}>New label</NewLabelButton>
				: <Link to="/new"><NewLabelButton color="green" onClick={openNewMilestone}>New milestone</NewLabelButton></Link>
			}

			{labelInputShow && <NewLabel insertType="NEW_LABEL" callBack={openNewLabel} addLabelAPI={addLabelAPI}/>}
		</>
	);
}

export default Header;

const TabButton = styled.button`
	height: 36px;
	padding: 0 20px;
	border: 1px solid #e4e7ea;
	cursor: pointer;
	border-radius: ${props => (props.type === "label") ? "5px 0 0 5px" : "0 5px 5px 0"};

	${props => {
	if (props.tabType === props.type) {
		return `background-color: #1066d6;
				color: #ffffff;
				font-weight: bold;`
	}
}}
`;

const NewLabelButton = styled.button`
	height: 36px;
	float: right;
	
	padding: 0 20px;
	border-radius: 5px;
	border: 1px solid #e4e7ea;
	cursor: pointer;
	
	${props => {
		if (props.color === "green") {
			return `
					background-color: #31c553;
					color: #ffffff;
					font-weight: bold;
					float: right;
				`
		}
	}}
 `;

