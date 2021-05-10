import CommentTitle from "../milestone/CommentTitle";
import TitleInput from "../templates/TitleInput";
import TitleTextarea from "../templates/TitleTextarea";
import Button from "../templates/Button";
import React, {useState} from 'react';
import styled from 'styled-components';
import {addLabels} from "../../api/LabelApi";
import {Link} from "react-router-dom";

const NewMilestone = () => {
	const [newMilestoneInfo, setNewMilestoneInfo] = useState({
		title: "",
		dueDate: "",
		desc: "",
		activeType: "open",
		issueCnt: 0,
		closedIssueCnt: 0,
	});

	const onClickCreate = () => {
		const url = "http://localhost:3001/milestones";

		addLabels(url, newMilestoneInfo);
	};

	const onChangeTitle = ({target: {value: newMilestoneTitle}}) => setNewMilestoneInfo({...newMilestoneInfo, title: newMilestoneTitle });
	const onChangeDueDate = ({target: {value: newMilestoneDueDate}}) => setNewMilestoneInfo({...newMilestoneInfo, dueDate: newMilestoneDueDate});
	const onChangeDesc = ({target: {value: newMilestoneDesc}}) => setNewMilestoneInfo({...newMilestoneInfo, desc: newMilestoneDesc});

	return (
		<>
			<CommentTitle/>
			<Contents>
				<TitleInput label="Title" placehlder="Title" onChange={onChangeTitle}/>
				<TitleInput label="Due date (optional)" placehlder="연도. 월. 일" onChange={onChangeDueDate}/>
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

