import MilestonelItem from "./MilestonelItem";
import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import {getLabel} from "../../api/LabelApi";
import {milestoneUrl} from "../../api/ApiUrl";
import {List, ListTitle} from "../templates/Common"


const MilestoneContainer = () => {
	const [mileStoneActive, setMileStoneActive] = useState("open");
	const [milestones, setMilestones] = useState([]);

	const onClickMileStoneTitle = async ({target}) => {
		const activeType = target.getAttribute("type");

		await setMileStoneActive(activeType);
	}

	useEffect(async () => {
		const data = await getLabel(`${milestoneUrl}?activeType=${mileStoneActive}`);
		setMilestones(data);
	}, [mileStoneActive]);

	return (
		<List>
			<ListTitle>
				<MilestoneTitleButton type="open"
															activeYn={mileStoneActive}
															onClick={onClickMileStoneTitle}>open</MilestoneTitleButton>
				<MilestoneTitleButton type="closed"
															activeYn={mileStoneActive}
															onClick={onClickMileStoneTitle}>closed</MilestoneTitleButton>
			</ListTitle>
			<MilestonelItem milestones={milestones}/>
		</List>
	);
};

export default MilestoneContainer;

const MilestoneTitleButton = styled.div`
	margin-right: 10px;
	
	&:last-child { margin-right: 0px; }
	
	${({type, activeYn}) => {
		if (type === activeYn) return `color: #000;`
		else return `color: #8f959c;`
	}}
`;