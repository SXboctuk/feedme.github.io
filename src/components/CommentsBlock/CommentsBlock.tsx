import { t } from 'i18next';
import React, { useState } from 'react';
import { errorMassage } from '../../constants/errorMassage';
import { regexString } from '../../constants/regex';
import styles from '../../constants/stylesProperty';
import useWindowSize from '../../hooks/useWindowSize';
import { IComment } from '../../interfaces/Comment';
import Comment from '../Comment';

import Button from '../shared/Button';
import {
    Comments,
    CommentsError,
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
    const [inputValue, setInputValue] = useState('');
    const [inputError, setInputError] = useState('');
    const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.match(regexString.IS_VALID_STRING)) {
            setInputValue(e.target.value);
            setInputError('');
        }
    };
    return (
        <CommentsWrapper>
            <CommentsTitle>
                {t('commentsTitle') + `(${comments.length})`}
            </CommentsTitle>
            <CommentsInputBlock>
                <CommentsLeftBlock>
                    <CommentsInput
                        placeholder={t('expressyourself')}
                        onChange={handlerInput}
                        value={inputValue}
                    />
                    <CommentsError>{inputError}</CommentsError>
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
                        if (
                            inputValue.match(regexString.IS_STRING_SHORT) ===
							null
                        ) {
                            setInputError(errorMassage.IS_SHORT);
                            return;
                        }
                        handlerSendComment(inputValue);
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
