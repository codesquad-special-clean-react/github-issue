import React from 'react';
import styled from "styled-components";

const TitleInput = ({label, placehlder, onChange, value}) => {
	return (
		<InputTemplate>
			<label>{label}</label>
			<input type="text" placeholder={placehlder} maxLength={20} onChange={onChange} value={value && value}/>
			<reset>
			</reset>
		</InputTemplate>
	);
};

export default TitleInput;

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
    
	& input {
		height: 15px;
		padding: 10px;
		border: 1px #d7dbdf solid;
		border-radius: 5px;
		background-color: #fafbfc;
		
		&:focus {
			box-shadow: 0px 0px 3px 2px #6cbbf7;
			border: 1px #6cbbf7 solid;
			outline: none;
		}
	}
`;