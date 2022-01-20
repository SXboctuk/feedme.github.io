import { t } from 'i18next';
import React, { createRef, useRef } from 'react';
import styles from '../../constants/stylesProperty';
import useWindowSize from '../../hooks/useWindowSize';
import { IComment } from '../../interfaces/Comment';
import Comment from '../Comment';

import Button from '../shared/Button';
import {
	Comments,
	CommentsInput,
	CommentsInputBlock,
	CommentsLeftBlock,
	CommentsTitle,
	CommentsWrapper,
} from './CommentBlock.Styled';

const CommentsBlock = (props: {
	comments: IComment[];
	handlerSendComment: (str: string) => void;
}) => {
	const { comments, handlerSendComment } = props;
	const { width } = useWindowSize();
	const refInputText = createRef<HTMLInputElement>();
	return (
		<CommentsWrapper>
			<CommentsTitle>
				{t('commentsTitle') + `(${comments.length})`}
			</CommentsTitle>
			<CommentsInputBlock>
				<CommentsLeftBlock>
					<CommentsInput
						placeholder={t('expressyourself')}
						ref={refInputText}
					/>
					{width >= parseInt(styles.screenSize.sm) ? (
						<Comments>
							{comments.map((elem, i) => (
								<Comment
									key={i + elem.userId}
									createDate={elem.createDate}
									imageSrc={elem.imageSrc}
									textComment={elem.textComment}
									userId={elem.userId}
									userName={elem.userName}
								/>
							))}
						</Comments>
					) : null}
				</CommentsLeftBlock>

				<Button
					variant={'solidSend'}
					onClick={() => {
						if (refInputText.current)
							handlerSendComment(
								refInputText.current?.value.toString(),
							);
					}}
				/>
			</CommentsInputBlock>
			{width < parseInt(styles.screenSize.sm) ? (
				<Comments>
					{comments.map((elem, i) => (
						<Comment
							key={i + elem.userId}
							createDate={elem.createDate}
							imageSrc={elem.imageSrc}
							textComment={elem.textComment}
							userId={elem.userId}
							userName={elem.userName}
						/>
					))}
				</Comments>
			) : null}
		</CommentsWrapper>
	);
};

export default CommentsBlock;
