import CommentTitle from "../milestone/CommentTitle";
import TitleInput from "../templates/TitleInput";
import TitleTextarea from "../templates/TitleTextarea";
import Button from "../templates/Button";
import React, {useEffect, useReducer} from 'react';
import {addLabels, editLabel, getLabel} from "../../api/LabelApi";
import {Link} from "react-router-dom";
import {milestoneUrl} from "../../api/ApiUrl";
import styled from 'styled-components';
import {DateFormat} from "../../util/DateFormat";

const NewMilestone = (props) => {
	const { params } = props.match;
	const paramId = params.id;

	const initialState = {
		title: "",
		dueDate: "",
		desc: "",
		activeType: "open",
		issueCnt: 0,
		closedIssueCnt: 0,
	}

	let editState = {
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
			case "edit": return editState;
			case 'updateTitle': return {...state, title: action.title};
			case 'updateDueDate': return {...state, dueDate: action.dueDate};
			case 'updateDesc': return {...state, desc: action.desc};
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	const getEditData = () => {
		if (paramId === "new") {
			const data = getLabel(`${milestoneUrl}?id=${paramId}`);
			editState = {
				title:  data.title,
				dueDate:  data.dueDate,
				desc:  data.desc,
				activeType:  data.activeType,
				issueCnt: data.issueCnt,
				closedIssueCnt: data.closedIssueCnt,
			}

			dispatch({ type: "edit"})
		}
	};

	useEffect(() => {
		getEditData();
	}, []);

	const validateDate = (date) => {
		const result = DateFormat(date);

		if (result === "break") return;

		dispatch({ type: "updateDueDate", dueDate: result });
	};

	const onChangeTitle = event => dispatch({ type: "updateTitle", title: event.target.value });
	const onChangeDueDate = event => validateDate( event.target.value );
	const onChangeDesc = event => dispatch({ type: "updateDesc", desc: event.target.value });

	const chkAddValidate = () => {
		paramId === "new"
		? addLabels(milestoneUrl, state)
		: editLabel(milestoneUrl, paramId, state);
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
			<Link to="/"><Button type="green" onClick={onClickCreate}>{paramId === "new" ? "Create milestone" : "Edit milestone"}</Button></Link>
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

