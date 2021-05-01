import "../../css/label.css";
import "../../css/button.css";
import "../../css/common.css";
import "../../css/LabelCustom.css";
import "../../css/Header.css";
import img from "../../images/random-icon.png";
import React, {useState, useEffect} from "react";
import styled from 'styled-components';

const NewLabel = ({openNewLabel, addLabelAPI}) => {
    const [newLabelInfo, setNewLabelInfo] = useState({
        name: "",
        desc: "",
        color: "#bfd4f2",
        disabledYn: false,
        errorMessage: "",
    });

    const onChangeName = ({target: {value: newLabelName}}) => {
        setNewLabelInfo({...newLabelInfo,
            name: newLabelName,
            disabledYn: (newLabelName || newLabelInfo.color),
            errorMessage: (newLabelName.length >= 20 ? "최대 20자 까지 입력 가능합니다." : "")
        });
    }

    const onChangeDesc = ({target: {value: newLabelDescription}}) => {
        setNewLabelInfo({ ...newLabelInfo,
            desc: newLabelDescription
        });
    }

    const onChangeColor = ({target: {value: newLabelColor}}) => {
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
            "name": newLabelInfo.name,
            "desc": newLabelInfo.desc,
            "color": newLabelInfo.color,
        };

        addLabelAPI('http://localhost:3001/labels', param);
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
                            <Button type={"randomColor"} bgColor={newLabelInfo.color} onClick={makeRandomColor}/>
                            <input type="text" className="color-code" id="colorCodeInput" onChange={onChangeColor} value={newLabelInfo.color}/>
                        </div>
                    </div>

                    <Button onClick={openNewLabel}>Cancel</Button>
                    <Button type={"green"} disabledYn={newLabelInfo.disabledYn} id="createLabelBtn" onClick={onClickCreateLabel} >
                        Create Label
                    </Button>
                </div>
                {newLabelInfo.errorMessage && <ErrorMessage>* {newLabelInfo.errorMessage}</ErrorMessage>}
            </div>
        </>
    );
};

export default NewLabel;

const ErrorMessage = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #d85656;
`;

const Button = styled.button`
    margin-right: 10px;
    padding: 0 20px;
    border-radius: 5px;
    border: 1px solid #e4e7ea;
    cursor: pointer;

    &: last-child {
        margin-right: 0;
    }

    ${props => {
        switch (props.type) {
            case "green":
                return (`
                    background-color: ${ props.disabledYn ? "#31c553" : "#94d3a2"};
                    color: #ffffff;
                    font-weight: bold;
                    float: right;
                `)
                break;
            case "randomColor":
                return (`
                    width: 35px;
                    height: 100%;
                    background: url("${img}") no-repeat;
                    background-size: 40%;
                    background-position: 50%;
                    background-color: ${props.bgColor};
                    border: none;
                `)
                break;
            default:
                return null;
        }
    }}
`;