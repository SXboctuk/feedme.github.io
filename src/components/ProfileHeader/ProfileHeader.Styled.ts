import styled from 'styled-components';
import styles from '../../constants/stylesProperty';
import SvgCamera from '../Svg/SvgCamera';

export const ProfileHeaderBlock = styled.div`
	display: block;
`;

export const ProfileHeaderWrapper = styled.div`
	display: flex;
	align-items: center;
	@media (max-width: ${styles.screenSize.sm}) {
		flex-direction: column;
	}
`;

export const ProfileHeaderImage = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;
export const ProfileHeaderSvgCamera = styled(SvgCamera)`
	position: absolute;
	top: 50%;
	right: 50%;
	transform: translateX(50%) translateY(-50%);
`;
export const ProfileHeaderHover = styled.div`
	position: absolute;
	top: 0;
	height: 100%;
	width: 100%;
	display: none;
`;
export const ProfileHeaderImageWrapper = styled.div`
	position: relative;
	overflow: hidden;
	height: 160px;
	width: 160px;
	border-radius: 160px;
	&:hover ${ProfileHeaderHover} {
		display: block;
		cursor: pointer;
	}
`;
export const ProfileHeaderHoverBackground = styled.div`
	background-color: ${({ theme }) => theme.colors.textMain};
	opacity: 0.5;
	width: 160px;
	height: 160px;
`;

export const ProfileHeaderTextBlock = styled.div`
	max-width: 500px;
	width: 100%;
	margin-left: ${styles.distances.lg};
	@media (max-width: ${styles.screenSize.sm}) {
		margin-left: 0;
		margin-top: ${styles.distances.md};
	}
`;

export const ProfileHeaderUserName = styled.div`
	font-weight: bold;
	font-size: 40px;
	line-height: 48px;
	font-family: 'Montserrat';
	color: ${({ theme }) => theme.colors.textMain};

	@media (max-width: ${styles.screenSize.sm}) {
		text-align: center;
	}
`;

export const ProfileHeaderUserText = styled.div`
	font-weight: normal;
	font-size: 18px;
	line-height: 22px;
	font-family: 'Roboto';

	margin-top: ${styles.distances.md};
`;
