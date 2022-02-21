import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const CommentWrapper = styled.div`
	display: flex;
`;
export const CommentImageWrapper = styled.div`
	min-width: 68px;
	height: 68px;
	border-radius: 100px;
	position: relative;
	overflow: hidden;
`;
export const CommentImage = styled.img`
	position: absolute;
	top: 0;
	object-fit: cover;
`;

export const CommentTextBlock = styled.div`
	margin-left: ${styles.distances.md};
	width: 100%;
`;

export const CommentTextHeader = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: ${styles.distances.xs};
`;

export const CommentUserName = styled(Link)`
	font-weight: 600;
	font-size: 18px;
	line-height: 22px;
	color: ${({ theme }) => theme.colors.textSecondary};
`;

export const CommentDispatchTime = styled.div`
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	color: ${({ theme }) => theme.colors.textMain};
`;

export const CommentText = styled.div`
	font-weight: normal;
	font-size: 14px;
	line-height: 19px;
	color: ${({ theme }) => theme.colors.textMain};
`;
