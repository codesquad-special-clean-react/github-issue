import "../../css/Header.css";
import "../../css/button.css";
import React, {useState} from 'react';
import LabelCustom from "../label/LabelCustom"
import styled from 'styled-components'

function Header() {
    const [labelInputShow, setLabelInputShow] = useState(false);

    const openNewLabel = () => setLabelInputShow(!labelInputShow);

    return (
        <>
            <div className="header-container">
                <TabButton type="left" className="tab-button active">Labels</TabButton>
                <TabButton type="right" className="tab-button">Milestones</TabButton>

                <NewLabel className="button-style green" onClick={openNewLabel}>New label</NewLabel>
            </div>

            {labelInputShow && <LabelCustom openNewLabel={openNewLabel}/>}
        </>
    );
}

export default Header;

const TabButton = styled.button`
  height: 36px;
  padding: 0 20px;
  border: 1px solid #e4e7ea;
  cursor: pointer;
  border-radius: ${props => (props.type === "left") ? "5px 0 0 5px" : "0 5px 5px 0" };
`;

const LeftTab = styled.button`
    border-radius: 5px 0 0 5px;
`;

const RightTab = styled.button`
    border-radius: 0 5px 5px 0;
`;

const NewLabel = styled.button`
    height: 36px;
    float: right;
 `;

