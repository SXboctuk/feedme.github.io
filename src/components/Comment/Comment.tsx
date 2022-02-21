import React from 'react';
import { routePath } from '../../constants/routePath';
import { IComment } from '../../interfaces/Comment';
import {
	CommentWrapper,
	CommentImage,
	CommentTextBlock,
	CommentTextHeader,
	CommentUserName,
	CommentDispatchTime,
	CommentText,
	CommentImageWrapper,
} from './Comment.Styled';

const Comment = (props: IComment) => {
	const { imageSrc, createDate, userName, userId, textComment } = props;

	const getDateString = (date: Date) => {
		const currentTime = new Date();

		if (
			(currentTime.getTime() - date.getTime()) / (1000 * 60 * 60) <= 8 &&
			(currentTime.getTime() - date.getTime()) / (1000 * 60 * 60) > 1
		) {
			const textHour =
				(currentTime.getTime() - date.getTime()) / (1000 * 60 * 60) ===
				1
					? 'hour'
					: 'hours';
			return (
				Math.floor(
					(currentTime.getTime() - date.getTime()) / (1000 * 60 * 60),
				) +
				' ' +
				textHour +
				' ago'
			);
		} else if (
			(currentTime.getTime() - date.getTime()) / (1000 * 60) <=
			60
		) {
			const textHour =
				(currentTime.getTime() - date.getTime()) / (1000 * 60) === 1
					? 'minute'
					: 'minutes';
			return (
				Math.floor(
					(currentTime.getTime() - date.getTime()) / (1000 * 60),
				) +
				' ' +
				textHour +
				' ago'
			);
		}

		return date.toLocaleDateString('en-Us');
	};

	return (
		<CommentWrapper>
			<CommentImageWrapper>
				<CommentImage src={imageSrc} />
			</CommentImageWrapper>

			<CommentTextBlock>
				<CommentTextHeader>
					<CommentUserName
						to={'/' + routePath.PROFILE + '/' + userId}
					>
						{userName}
					</CommentUserName>
					<CommentDispatchTime>
						{getDateString(createDate)}
					</CommentDispatchTime>
				</CommentTextHeader>
				<CommentText>{textComment}</CommentText>
			</CommentTextBlock>
		</CommentWrapper>
	);
};

export default Comment;
