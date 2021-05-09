import CommentTitle from "../milestone/CommentTitle";
import TitleInput from "../templates/TitleInput";
import React from 'react';
import styled from 'styled-components';

const NewMilestone = () => {
	return (
		<>
			<CommentTitle/>
			<Contents>
				<TitleInput label="Title" placehlder="Title"/>
				<TitleInput label="Due date (optional)" placehlder="연도. 월. 일"/>
				<TitleInput label="Description (optional)"/>
			</Contents>
		</>
	);
};

export default NewMilestone;

const Contents = styled.div`
	padding: 20px 0;
`;

