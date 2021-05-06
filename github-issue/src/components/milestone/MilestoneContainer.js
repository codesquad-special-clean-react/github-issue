import MilestonelItem from "./MilestonelItem";
import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {List, ListTitle} from "../common/common"
import {getLabel} from "../../api/LabelApi";


const MilestoneContainer = () => {
	const [mileStoneTitleActive, setMileStoneTitleActive] = useState("open");
	const [milestones, setMilestones] = useState([]);

	const onClickMileStoneTitle = ({target}) => setMileStoneTitleActive(target.getAttribute("type"));

	const getMilestones = () => {
		getLabel("http://localhost:3001/milestones")
			.then(data => setMilestones(data));
	}


	useEffect(() => {
		getMilestones();
	}, []);

	return (
		<List>
			<ListTitle>
				<MilestoneTitleButton type="open" activeYn={mileStoneTitleActive}
															onClick={onClickMileStoneTitle}>open</MilestoneTitleButton>
				<MilestoneTitleButton type="closed" activeYn={mileStoneTitleActive}
															onClick={onClickMileStoneTitle}>closed</MilestoneTitleButton>
			</ListTitle>

			<MilestonelItem milestones={milestones}/>
		</List>
	);
};

export default MilestoneContainer;

const MilestoneTitleButton = styled.div`
	margin-right: 10px;
	
	&:last-child {
		margin-right: 0px;
	}
	
	${({type, activeYn}) => {
	if (type === activeYn) {
		return `color: #000;`
	} else {
		return `color: #8f959c;`
	}
}}
`;