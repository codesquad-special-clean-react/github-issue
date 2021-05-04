import img from "../../images/random-icon.png";
import React, {useState, useEffect} from "react";
import styled from 'styled-components';

const NewLabel = ({callBack, addLabelAPI, editLabelAPI, insertType, param}) => {

	const initNewLabelInfo = (insertType === "NEW_LABEL")
		? {
			name: "",
			desc: "",
			color: "#bfd4f2",
			disabledYn: false,
			errorMessage: "",
		}
		: {
			...param,
			disabledYn: true,
			errorMessage: "",
		}

	const [newLabelInfo, setNewLabelInfo] = useState(initNewLabelInfo);

	const onChangeName = ({target: {value: newLabelName}}) => {
		setNewLabelInfo({
			...newLabelInfo,
			name: newLabelName,
			disabledYn: (newLabelName || newLabelInfo.color),
			errorMessage: (newLabelName.length >= 20 ? "최대 20자 까지 입력 가능합니다." : "")
		});
	}

	const onChangeDesc = ({target: {value: newLabelDescription}}) => {
		setNewLabelInfo({
			...newLabelInfo,
			desc: newLabelDescription
		});
	}

	const onChangeColor = ({target: {value: newLabelColor}}) => {
		setNewLabelInfo({
			...newLabelInfo,
			color: newLabelColor,
			disabledYn: (newLabelColor || newLabelInfo.name),
		});
	}

	const makeRandomColor = () => {
		const randomColor = `#${Math.round(Math.random() * 0xffffff).toString(16)}`

		setNewLabelInfo({
			...newLabelInfo,
			color: randomColor
		});
	}

	const onClickCreateLabel = ({target}) => {
		let chkValidation = [];

		if (!newLabelInfo.name) chkValidation.push("이름")
		if (!newLabelInfo.color) chkValidation.push("색상")

		if (chkValidation.length > 0) return setNewLabelInfo({
			...newLabelInfo,
			errorMessage: `${chkValidation.join(" / ")} 정보를 입력해 주세요`
		});

		const paramObj = {
			"name": newLabelInfo.name,
			"desc": newLabelInfo.desc,
			"color": newLabelInfo.color,
		};

		if (insertType === "NEW_LABEL")
			addLabelAPI('http://localhost:3001/labels', paramObj);
		else if (insertType === "EDIT_LABEL")
			editLabelAPI('http://localhost:3001/labels', newLabelInfo.id, paramObj);
	}

	const onClickCancel = () => {
		if (insertType === "NEW_LABEL" || insertType === "EDIT_LABEL") return callBack();
	}

	return (
		<>
			<NewLabelContainer type={insertType}>
				<NewLabelPreview>
					{newLabelInfo.name &&
					<NewLabelPreviewTag bgColor={newLabelInfo.color}>{newLabelInfo.name}</NewLabelPreviewTag>}
				</NewLabelPreview>

				<NewLabelInfo className="label-info">
					<TitleInput className="name">
						<label>Label Name</label>
						<input type="text" placeholder="Label name" maxLength={20} onChange={onChangeName}
						       value={newLabelInfo.name}/>
					</TitleInput>

					<TitleInput className="desc">
						<label>Description</label>
						<input type="text" placeholder="Description (optional)" onChange={onChangeDesc}
						       value={newLabelInfo.desc}/>
					</TitleInput>

					<TitleInput className="color">
						<label>Color</label>
						<div>
							<Button type={"randomColor"} bgColor={newLabelInfo.color} onClick={makeRandomColor}/>
							<input type="text" onChange={onChangeColor} value={newLabelInfo.color}/>
						</div>
					</TitleInput>

					<Button onClick={onClickCancel}>Cancel</Button>
					<Button type={"green"}
					        disabled={newLabelInfo.disabledYn.length == 0}
					        disabledYn={newLabelInfo.disabledYn}
					        onClick={onClickCreateLabel}>
						{insertType === "NEW_LABEL" ? "Create Label" : "Save changes"}
					</Button>
				</NewLabelInfo>
				{newLabelInfo.errorMessage && <ErrorMessage>* {newLabelInfo.errorMessage}</ErrorMessage>}
			</NewLabelContainer>
		</>
	);
};

export default NewLabel;

const NewLabelContainer = styled.div`
    margin-top: 1.5em;
    ${props => {
	if (props.type === "NEW_LABEL") {
		return `
            padding: 1.5em;
            background-color: #f6f8fa;
            border: 1px solid #d9dce0;
            border-radius: 5px;
        `
	} else if (props.type === "EDIT_LABEL") {
		return `
            background-color: #fff
            border: none;
        `
	}
}}
`;

const NewLabelPreview = styled.div`
  display: flex;
`;

const NewLabelPreviewTag = styled.div`
    padding: 2px 10px 4px 10px;
    font-weight: bold;
    color: #ffffff;
    border-radius: 5px;
	background-color: ${props => props.bgColor}
`;

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
	if (props.disabled) {
		return `
					background-color: #94d3a2;
					color: #ffffff;`
	}

	if (props.type === "green") {
		return `
                    background-color: ${props.disabledYn ? "#31c553" : "#94d3a2"};
                    color: #ffffff;
                    font-weight: bold;
                    float: right;
                `
	} else if (props.type === "randomColor") {
		return `
                    width: 35px;
                    height: 100%;
                    background: url("${img}") no-repeat;
                    background-size: 40%;
                    background-position: 50%;
                    background-color: ${props.bgColor};
                    border: none;
                `
	}
}}
`;

const NewLabelInfo = styled.div`
    display: flex;
    margin: 20px 0;
`;


const TitleInput = styled.div`
    margin: 0 10px 0 0;
	display: flex;
	flex-flow: column;
	
	&.name { flex: 1; }

	&.desc { flex: 3; }
	
	&.color {
		flex: 1;
		margin-right: 20px;
		
		& > div {
			display: flex;
			
			& > .reset-btn {
				width: 35px;
				height: 100%;
				background: url("../images/random-icon.png") no-repeat;
				background-size: 40%;
				background-position: 50%;
				background-color: #bfd4f2;
				margin-right: 10px;
				border: none;
				border-radius: 5px;
			}
		}
    }
    
    & > label {
		font-weight: bold;
		margin-bottom: 5px;
    }
    
	& input {
		height: 15px;
		padding: 10px;
		border: 1px #d7dbdf solid;
		border-radius: 5px;
		
		&:focus {
			box-shadow: 0px 0px 3px 2px #6cbbf7;
			border: 1px #6cbbf7 solid;
			outline: none;
		}
	}
	
`;