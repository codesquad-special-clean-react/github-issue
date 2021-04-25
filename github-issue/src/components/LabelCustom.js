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

        setName(nameVal);
        setDisabledYn(nameVal.trim().length > 0);
    }

    const onChangeDesc = ({target}) => {
        const descVal = target.value;

        setDesc(descVal);
        setDisabledYn(descVal.trim().length > 0);
    }

    const onClickCreateLabel = ({target}) => {
        console.log("ㅋㄹ!");
    }

    const disabledNewLabelBtn = () => {
        const $newLabelBtn = document.querySelector("#createLabelBtn");

        (disabledYn)
            ? $newLabelBtn.classList.remove("disabled")
            : $newLabelBtn.classList.add("disabled");
    }

    useEffect(() => {
        disabledNewLabelBtn();
    }, [disabledYn])


    return (
        <>
            <div className="label-custom-container new-label-form">

                <div className="label-preview label-name">
                    {name && <div style={{backgroundColor: color}}>{name}</div>}
                </div>

                <div className="label-info">
                    <div className="input-title-style name">
                        <label>Label Name</label>
                        <input type="text" placeholder="Label name" onChange={onChangeName}/>
                    </div>

                    <div className="input-title-style desc">
                        <label>Description</label>
                        <input type="text" placeholder="Description (optional)" onChange={onChangeDesc}/>
                    </div>

                    <div className="input-title-style color">
                        <label>Color</label>
                        <div>
                            <button className="button-style reset-btn"></button>
                            <input type="text" className="color-code" />
                        </div>
                    </div>

                    <button className="button-style cancel-btn" onClick={openNewLabel}>Cancel</button>
                    <button className="button-style green disabled" id="createLabelBtn" onClick={onClickCreateLabel} disabled={disabledYn}>
                        Create Label
                    </button>
                </div>
            </div>
        </>
    );
};

export default LabelCustom;
