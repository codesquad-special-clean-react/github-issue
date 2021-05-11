import React from 'react';
import styled from "styled-components";

const TitleTextarea = ({label, placehlder, onChange}) => {
	return (
		<InputTemplate InputTemplate2>
			<label>{label}</label>
			<textarea placeholder={placehlder} maxLength={200} onChange={onChange}/>
		</InputTemplate>
	);
};

export default TitleTextarea;

const InputTemplate = styled.div`
	margin-bottom: 20px;
	display: flex;
	flex-flow: column;
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
    
	& > label {
		font-weight: bold;
		margin-bottom: 5px;
	}
    
	& textarea {
		height: 100px;
		padding: 10px;
		border: 1px #d7dbdf solid;
		border-radius: 5px;
		background-color: #fafbfc;
		resize: none;
		
		&:focus {
			box-shadow: 0px 0px 3px 2px #6cbbf7;
			border: 1px #6cbbf7 solid;
			outline: none;
		}
	}
`;