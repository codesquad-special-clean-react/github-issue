import "../css/label.css";
import "../css/button.css";
import "../css/common.css";
import "../css/LabelCustom.css";
import "../css/Header.css";
import React, {useState, useEffect} from "react";
import styled from 'styled-components';
import {addLabels} from "../api/LabelApi";

const LabelCustom = ({openNewLabel}) => {
    const [newLabelInfo, setNewLabelInfo] = useState({
        name: "",
        desc: "",
        color: "#bfd4f2",
        disabledYn: "",
        errorMessage: "",
    });

    const onChangeName = ({target}) => {
        const newLabelName = target.value;

        setNewLabelInfo({...newLabelInfo,
            name: newLabelName,
            disabledYn: (newLabelName || newLabelInfo.color),
            errorMessage: (newLabelName.length >= 20 ? "최대 20자 까지 입력 가능합니다." : "")
        });
    }

    const onChangeDesc = ({target}) => {
        const newLabelDescription = target.value;

        setNewLabelInfo({ ...newLabelInfo,
            desc: newLabelDescription
        });
    }

    const onChangeColor = ({target}) => {
        const newLabelColor = target.value;

        setNewLabelInfo({ ...newLabelInfo,
            color: newLabelColor,
            disabledYn: (newLabelColor || newLabelInfo.name),
        });
    }

    const makeRandomColor = () => {
        const randomColor = `#${Math.round(Math.random() * 0xffffff).toString(16)}`

        setNewLabelInfo({ ...newLabelInfo,
            color: randomColor
        });
    }

    const onClickCreateLabel = ({target}) => {
        let chkValidation = [];

        if (!newLabelInfo.name) chkValidation.push("이름")
        if (!newLabelInfo.color) chkValidation.push("색상")

        if (chkValidation.length > 0) setNewLabelInfo({...newLabelInfo,
            errorMessage: `${chkValidation.join(" / ")} 정보를 입력해 주세요`
        });

        const param = {
            "id": 4,        // todo :: count max idx
            "name": newLabelInfo.name,
            "desc": newLabelInfo.desc,
            "color": newLabelInfo.color,
        };

        addLabels('http://localhost:3001/labels', param);
    }

    const disabledNewLabelBtn = () => {
        const $newLabelBtn = document.querySelector("#createLabelBtn");

        (newLabelInfo.disabledYn)
            ? $newLabelBtn.classList.remove("disabled")
            : $newLabelBtn.classList.add("disabled");
    }

    useEffect(() => {
        disabledNewLabelBtn();
    }, [newLabelInfo.disabledYn, newLabelInfo.color, newLabelInfo.errorMessage])

    return (
        <>
            <div className="label-custom-container new-label-form">
                <div className="label-preview label-name">
                    {newLabelInfo.name && <div style={{backgroundColor: newLabelInfo.color}}>{newLabelInfo.name}</div>}
                </div>

                <div className="label-info">
                    <div className="input-title-style name">
                        <label>Label Name</label>
                        <input type="text" placeholder="Label name" maxLength={20} onChange={onChangeName} />
                    </div>

                    <div className="input-title-style desc">
                        <label>Description</label>
                        <input type="text" placeholder="Description (optional)" onChange={onChangeDesc}/>
                    </div>

                    <div className="input-title-style color">
                        <label>Color</label>
                        <div>
                            <button className="button-style reset-btn" style={{backgroundColor: newLabelInfo.color}} onClick={makeRandomColor}></button>
                            <input type="text" className="color-code" id="colorCodeInput" onChange={onChangeColor} value={newLabelInfo.color}/>
                        </div>
                    </div>

                    <button className="button-style cancel-btn" onClick={openNewLabel}>Cancel</button>
                    <button className="button-style green disabled" id="createLabelBtn" onClick={onClickCreateLabel} >
                        Create Label
                    </button>
                </div>
                {newLabelInfo.errorMessage && <ErrorMessage>* {newLabelInfo.errorMessage}</ErrorMessage>}
            </div>
        </>
    );
};

export default LabelCustom;

const ErrorMessage = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #d85656;
`;
