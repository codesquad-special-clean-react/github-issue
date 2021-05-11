import React from 'react';
import styled from "styled-components";

const CommentTitle = () => {
	const title = "New milestone";
	const contents = "Create a new milestone to help organize your issue and pull requests. Learn more about milestones and issue.";

	return (
		<Contents>
			<h1>{title}</h1>
			<span>{contents}</span>
		</Contents>
	);
};

export default CommentTitle;

const Contents = styled.div`
	border-bottom: 1px solid #e3e6e9;
	padding-bottom: 30px;
`;