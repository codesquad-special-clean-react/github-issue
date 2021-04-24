import "../css/label.css";
import "../css/button.css";
import "../css/common.css";
import "../css/LabelCustom.css";
import "../css/Header.css";
import React, {useState, useEffect} from "react";

const LabelCustom = () => {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [color, setColor] = useState("");

    const onChangeName = ({target}) => {
        setName(target.value);
    }

    const onChangeDesc = ({target}) => {
        setDesc(target.value);
    }

    const onClickCreateLabel = ({target}) => {
        target.classList.remove("disabled");
        target.removeAttribute("disabled");
    }

    const disabledNewLabelBtn = () => {
        const $newLabelBtn = document.querySelector("#createLabelBtn");

        if (name.trim().length > 0 || desc.trim().length > 0) {
            $newLabelBtn.setAttribute("disabled", false);
            $newLabelBtn.classList.remove("disabled");
        }
        else {
            $newLabelBtn.setAttribute("disabled", true);
            $newLabelBtn.classList.add("disabled");
        }
    }

    useEffect(() => {
        disabledNewLabelBtn();
    }, [name, desc])


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

                    <button className="button-style cancel-btn">Cancel</button>
                    <button className="button-style green disabled" id="createLabelBtn" onClick={onClickCreateLabel} disabled>
                        Create Label
                    </button>
                </div>
            </div>
        </>
    );
};

export default LabelCustom;
