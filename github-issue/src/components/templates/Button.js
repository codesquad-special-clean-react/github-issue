import React from 'react';
import styled from "styled-components";
import img from "../../images/random-icon.png";

const Button = (props) => {
	const idDisabled = props.disabled || false;
	const type = props.type || "";

	return (
		<ButtonLayout disabled={idDisabled} type={type} onClick={props.onClick}>{props.children}</ButtonLayout>
	);
};

export default Button;

const ButtonLayout = styled.button`
	height: 36px;
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
				color: #ffffff;
			`
		}
	
		if (props.type === "green") {
			return `
	            background-color: ${props.disabledYn ? "#94d3a2" : "#31c553"};
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