import "../../css/button.css";
import React, {useState} from 'react';
import NewLabel from "./NewLabel"
import styled from 'styled-components'

function Header({addLabelAPI}) {
	const [labelInputShow, setLabelInputShow] = useState(false);

	const openNewLabel = () => setLabelInputShow(!labelInputShow);

	return (
		<>
			<div className="header-container">
				<TabButton type="left" className="active">Labels</TabButton>
				<TabButton type="right" className="">Milestones</TabButton>

				<NewLabelButton className="button-style green" onClick={openNewLabel}>New label</NewLabelButton>
			</div>

			{labelInputShow && <NewLabel insertType="new" openNewLabel={openNewLabel} addLabelAPI={addLabelAPI}/>}
		</>
	);
}

export default Header;

const TabButton = styled.button`
	height: 36px;
	padding: 0 20px;
	border: 1px solid #e4e7ea;
	cursor: pointer;
	border-radius: ${props => (props.type === "left") ? "5px 0 0 5px" : "0 5px 5px 0"};
	
	&.active {
		background-color: #1066d6;
		color: #ffffff;
		font-weight: bold;
	}
`;

const LeftTab = styled.button`
    border-radius: 5px 0 0 5px;
`;

const RightTab = styled.button`
    border-radius: 0 5px 5px 0;
`;

const NewLabelButton = styled.button`
    height: 36px;
    float: right;
    
    &.green {
		background-color: #31c553;
		color: #ffffff;
		font-weight: bold;
		float: right;
    }
 `;

