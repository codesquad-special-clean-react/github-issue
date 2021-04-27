import "../css/label.css";
import "../css/button.css";
import "../css/common.css";
import "../css/LabelCustom.css";
import "../css/Header.css";
import React, {useState, useEffect} from "react";

const LabelCustom = ({openNewLabel}) => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [color, setColor] = useState("");
    const [disabledYn, setDisabledYn] = useState(false);


    const onChangeName = ({target}) => {
        const nameVal = target.value;

        if (nameVal.length > 20) return alert("최대 20자 까지 입력가능합니다.");

        setName(nameVal);
        setDisabledYn(nameVal || desc || color);
    }

    const onChangeDesc = ({target}) => {
        const descVal = target.value;

        setDesc(descVal);
        setDisabledYn(descVal || name || color);
    }

    const onChangeColor = ({target}) => {
        const colorVal = target.value;

        setColor(colorVal);
        setDisabledYn(colorVal || name || desc);
    }

    const makeRandomColor = () => {
        const randomColor = `#${Math.round(Math.random() * 0xffffff).toString(16)}`

        setColor(randomColor);
    }

    const onClickCreateLabel = ({target}) => {
        let chkValidation = [];

        if (!name) chkValidation.push("이름")
        if (!desc) chkValidation.push("상세")
        if (!color) chkValidation.push("색상")
        
        if (chkValidation.length > 0) return alert(`${chkValidation.join(" / ")} 정보를 입력해 주세요`);
    }

    const disabledNewLabelBtn = () => {
        const $newLabelBtn = document.querySelector("#createLabelBtn");

        (disabledYn)
            ? $newLabelBtn.classList.remove("disabled")
            : $newLabelBtn.classList.add("disabled");

    }

    useEffect(() => {
        disabledNewLabelBtn();
    }, [disabledYn, color])


    return (
        <>
            <div className="label-custom-container new-label-form">

                <div className="label-preview label-name">
                    {name && <div style={{backgroundColor: color}}>{name}</div>}
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
                            <input type="text" className="color-code" id="colorCodeInput" onChange={onChangeColor} value={color}/>
                        </div>
                    </div>

                    <button className="button-style cancel-btn" onClick={openNewLabel}>Cancel</button>
                    <button className="button-style green disabled" id="createLabelBtn" onClick={onClickCreateLabel} >
                        Create Label
                    </button>
                </div>
            </div>
        </>
    );
};

export default LabelCustom;
