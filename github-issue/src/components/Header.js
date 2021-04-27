import "../css/Header.css";
import "../css/button.css";
import React, {useState} from 'react';
import LabelCustom from "../components/LabelCustom";

function Header() {
    const [labelInputShow, setLabelInputShow] = useState(false);

    const openNewLabel = () => setLabelInputShow(!labelInputShow);

    return (
        <>
            <div className="header-container">
                <div className="tab-style">
                    <button className="left active">Labels</button>
                    <button className="right">Milestones</button>
                </div>
                <div>
                    <button className="button-style green" onClick={openNewLabel}>New label</button>
                </div>
            </div>

            {labelInputShow && <LabelCustom openNewLabel={openNewLabel}/>}
        </>
    );
}

export default Header;
