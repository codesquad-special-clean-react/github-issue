import CommentTitle from "../milestone/CommentTitle";
import TitleInput from "../templates/TitleInput";
import TitleTextarea from "../templates/TitleTextarea";
import Button from "../templates/Button";
import React, {useEffect, useReducer, useState} from 'react';
import {addLabels, editLabel, getLabel} from "../../api/LabelApi";
import {Link} from "react-router-dom";
import {milestoneUrl} from "../../api/ApiUrl";
import styled from 'styled-components';
import {DateFormat} from "../../util/DateFormat";

const NewMilestone = (props) => {
	const [ errMsg, setErrMsg ] = useState("");
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

	const reducer = (state, action) => {
		switch (action.type) {
			case "reset": return initialState;
			case "edit": return action.editState;
			case 'updateTitle': return {...state, title: action.title};
			case 'updateDueDate': return {...state, dueDate: action.dueDate};
			case 'updateDesc': return {...state, desc: action.desc};
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(async () => {
		if (paramId !== "new") {
			const data = await getLabel(`${milestoneUrl}?id=${paramId}`);

			let editState = {
				title:  data[0].title,
				dueDate:  data[0].dueDate,
				desc:  data[0].desc,
				activeType:  data[0].activeType,
				issueCnt: data[0].issueCnt,
				closedIssueCnt: data[0].closedIssueCnt,
			}
			dispatch({ type: "edit", editState: editState});
		}
	}, []);

	const validateDate = (date) => {
		const result = DateFormat(date);

		if (result === "break") return;

		dispatch({ type: "updateDueDate", dueDate: result });
	};

	const onChangeTitle = ({target}) => {
		(target.value.length === 0) && setErrMsg("제목을 입력해 주세요.");

		dispatch({ type: "updateTitle", title: target.value });
	};

	const onChangeDueDate = ({target}) => validateDate( target.value );
	const onChangeDesc = ({target}) => dispatch({ type: "updateDesc", desc: target.value });

	const chkAddValidate = () => {
		if (state.title.length === 0) return console.log("그만");

		paramId === "new"
		? addLabels(milestoneUrl, state)
		: editLabel(milestoneUrl, paramId, state);
	};

	return (
		<>
			<CommentTitle/>
			<Contents>
				<TitleInput label="Title" placehlder="Title" onChange={onChangeTitle} value={state.title}/>
				{errMsg && <ErrorMsg>{errMsg}</ErrorMsg>}
				<TitleInput label="Due date (optional)" placehlder="연도. 월. 일" onChange={onChangeDueDate} value={state.dueDate}/>
				<TitleTextarea label="Description (optional)" onChange={onChangeDesc} value={state.desc}/>
			</Contents>
			<Link to="/" ><Button type="green" onClick={chkAddValidate} disabled={errMsg}>{paramId === "new" ? "Create milestone" : "Edit milestone"}</Button></Link>
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

const ErrorMsg = styled.span`
	font-weight: bold;
	color: #c53131;
`;
