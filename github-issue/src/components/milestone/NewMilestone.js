import CommentTitle from "../milestone/CommentTitle";
import TitleInput from "../templates/TitleInput";
import TitleTextarea from "../templates/TitleTextarea";
import Button from "../templates/Button";
import React, {useReducer} from 'react';
import {addLabels} from "../../api/LabelApi";
import {Link} from "react-router-dom";
import {milestoneUrl} from "../../api/ApiUrl";
import styled from 'styled-components';
import {DateFormat} from "../../util/DateFormat";

const NewMilestone = () => {

	const initialState = {
		title: "",
		dueDate: "",
		desc: "",
		activeType: "open",
		issueCnt: 0,
		closedIssueCnt: 0,
	}

	const reducer = (state, action) => {
		switch (action.type) {
			case "reset": return initialState;
			case 'updateTitle': return {...state, title: action.title};
			case 'updateDueDate': return {...state, dueDate: action.dueDate};
			case 'updateDesc': return {...state, desc: action.desc};
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	const validateDate = (date) => {
		const result = DateFormat(date);

		if (result === "break") return;

		dispatch({ type: "updateDueDate", dueDate: result });
	};

	const onChangeTitle = event => dispatch({ type: "updateTitle", title: event.target.value });
	const onChangeDueDate = event => validateDate( event.target.value );
	const onChangeDesc = event => dispatch({ type: "updateDesc", desc: event.target.value });

	const chkAddValidate = () => {

		addLabels(milestoneUrl, state);
	};

	const onClickCreate = () => chkAddValidate();

	return (
		<>
			<CommentTitle/>
			<Contents>
				<TitleInput label="Title" placehlder="Title" onChange={onChangeTitle}/>
				<TitleInput label="Due date (optional)" placehlder="연도. 월. 일" onChange={onChangeDueDate} value={state.dueDate}/>
				<TitleTextarea label="Description (optional)" onChange={onChangeDesc}/>
			</Contents>
			<Link to="/"><Button type="green" onClick={onClickCreate}>Create milestone</Button></Link>
		</>
	);
};

export default NewMilestone;

const Contents = styled.div`
	padding: 20px 0;
	margin-bottom: 20px;
	border-bottom: 1px solid #e3e6e9;
	
	& input { width: 50%; }
	& textarea { width: 70%; }
`;

