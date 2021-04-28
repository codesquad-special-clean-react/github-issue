import "../css/Header.css";
import "../css/button.css";
import React, {useState} from 'react';
import LabelCustom from "../components/LabelCustom"
import styled from 'styled-components'

function Header() {
    const [labelInputShow, setLabelInputShow] = useState(false);

    const openNewLabel = () => setLabelInputShow(!labelInputShow);

    return (
        <>
            <div className="header-container">
                <LeftTab className="tab-button active">Labels</LeftTab>
                <RightTab className="tab-button">Milestones</RightTab>

                <NewLabel className="button-style green" onClick={openNewLabel}>New label</NewLabel>
            </div>

            {labelInputShow && <LabelCustom openNewLabel={openNewLabel}/>}
        </>
    );
}

export default Header;

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

