import styled from "styled-components";
import React from 'react';
import calendarIcon from "../../images/calendar-icon.png";

const DueDate = (props) => {
	console.log("props ", props.isExist)
	return (
		<DueDateContainer>
			<CalendarIcon></CalendarIcon>
			{ props.isExist === "Y"
				?
				<DateForm>
					<Text>Due by</Text>
					<Date>{props.children}</Date>
				</DateForm>
				:
				<DateForm>
					<Text>No due date</Text>
				</DateForm>
			}
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

const DateForm = styled.div`
	display: flex;
	flex-wrap: row;`

const Text = styled.div`
	margin-left: -5px;
`;

const Date = styled.div`
	margin-left: 10px;
	justify-content: center;
`;
