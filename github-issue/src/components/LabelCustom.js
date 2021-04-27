import "../css/label.css";
import "../css/button.css";
import "../css/common.css";
import "../css/LabelCustom.css";
import "../css/Header.css";
import React, {useState, useEffect} from "react";
import styled from 'styled-components';

const LabelCustom = ({openNewLabel}) => {
    // const [name, setName] = useState("");
    // const [desc, setDesc] = useState("");
    // const [color, setColor] = useState("");
    const [newLabelInfo, setNewLabelInfo] = useState({
        name: "",
        desc: "",
        color: "",
    })
    const [disabledYn, setDisabledYn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onChangeName = ({target}) => {
        const newLabelName = target.value;

        setNewLabelInfo({
            ...newLabelInfo,
            name: newLabelName
        });

        setDisabledYn(newLabelName || newLabelInfo.desc || newLabelInfo.color);
        setErrorMessage(newLabelName.length === 20 ? "최대 20자 까지 입력가능합니다." : "");
    }

    const onChangeDesc = ({target}) => {
        const newLabelDescription = target.value;

        setNewLabelInfo({ ...newLabelInfo, desc: newLabelDescription });
        setDisabledYn(newLabelDescription || newLabelInfo.name || newLabelInfo.color);
    }

    const onChangeColor = ({target}) => {
        const newLabelColor = target.value;

        setNewLabelInfo({ ...newLabelInfo, color: newLabelColor });
        setDisabledYn(newLabelColor || newLabelInfo.name || newLabelInfo.desc);
    }

    const makeRandomColor = () => {
        const randomColor = `#${Math.round(Math.random() * 0xffffff).toString(16)}`

        setNewLabelInfo({ ...newLabelInfo, color: randomColor });
    }

    const onClickCreateLabel = ({target}) => {
        let chkValidation = [];

        if (!newLabelInfo.name) chkValidation.push("이름")
        if (!newLabelInfo.desc) chkValidation.push("상세")
        if (!newLabelInfo.color) chkValidation.push("색상")

        if (chkValidation.length > 0) setErrorMessage(`${chkValidation.join(" / ")} 정보를 입력해 주세요`);
    }

    const disabledNewLabelBtn = () => {
        const $newLabelBtn = document.querySelector("#createLabelBtn");

        (disabledYn)
            ? $newLabelBtn.classList.remove("disabled")
            : $newLabelBtn.classList.add("disabled");
    }

    useEffect(() => {
        disabledNewLabelBtn();
    }, [disabledYn, newLabelInfo.color, errorMessage])


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
                            <button className="button-style reset-btn" onClick={makeRandomColor}></button>
                            <input type="text" className="color-code" id="colorCodeInput" onChange={onChangeColor} value={newLabelInfo.color}/>
                        </div>
                    </div>

                    <button className="button-style cancel-btn" onClick={openNewLabel}>Cancel</button>
                    <button className="button-style green disabled" id="createLabelBtn" onClick={onClickCreateLabel} >
                        Create Label
                    </button>
                </div>
                {errorMessage && <ErrorMessage>* {errorMessage}</ErrorMessage>}
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
