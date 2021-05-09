import styled from "styled-components";
import React from 'react';
import calendarIcon from "../../images/calendar-icon.png";

const DueDate = (props) => {
	return (
		<DueDateContainer>
			<CalendarIcon></CalendarIcon>
			<Text>Due by</Text>
			<Date>{props.children}</Date>
		</DueDateContainer>
	);
};

export default DueDate;

const DueDateContainer = styled.div`
	display: flex;
	flex-wrap: row;
	align-items: center;
`;

const CalendarIcon = styled.div`
	width: 30px;
	height: 30px;
	background: url("${calendarIcon}") no-repeat;
	background-size: 50%;
	background-position: 0%;
`;

const Text = styled.div`
	margin-left: -5px;
`;

const Date = styled.div`
	margin-left: 10px;
	justify-content: center;
`;
