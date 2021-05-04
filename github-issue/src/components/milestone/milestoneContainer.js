import React, {useState} from 'react';
import styled from "styled-components";
import {List, ListTitle} from "../common/common"

const MilestoneContainer = () => {
	const [mileStoneTitleActive, setMileStoneTitleActive] = useState("open");

	const onClickMileStoneTitle = ({target}) => setMileStoneTitleActive(target.getAttribute("type"));

	return (
		<List>
			<ListTitle>
				<MilestoneTitleButton type="open" activeYn={mileStoneTitleActive} onClick={onClickMileStoneTitle}>open</MilestoneTitleButton>
				<MilestoneTitleButton type="closed" activeYn={mileStoneTitleActive} onClick={onClickMileStoneTitle}>closed</MilestoneTitleButton>
			</ListTitle>
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
	}
	else {
		return `color: #8f959c;`
	}
}}
`;