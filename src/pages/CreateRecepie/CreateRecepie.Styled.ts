import styled from 'styled-components';
import SvgClose from '../../components/Svg/SvgClose';
import styles from '../../constants/stylesProperty';

export const CreateRecepieWrapper = styled.div`
	border-radius: ${({ theme }) => theme.borderRadius};
	background-color: ${({ theme }) => theme.colors.white};
	width: 100%;
	height: 100%;
	padding: ${styles.distances.xxl} ${styles.distances.xl};

	& > *:not(:last-child) {
		margin-bottom: ${styles.distances.lg};
	}
`;
export const CreateRecepieMainTitle = styled.div`
	font-family: 'Montserrat';
	font-weight: bold;
	font-size: 40px;
	line-height: 48px;
	margin-bottom: ${styles.distances.xl};
`;
export const CreateRecepieLabel = styled.div`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 16px;
	line-height: 20px;
`;
export const CreateRecepieFooterBlock = styled.div`
	margin-top: ${styles.distances.mdPlus};
	display: flex;
	justify-content: flex-end;

	& > *:last-child {
		margin-left: ${styles.distances.lg};
	}

	@media (max-width: ${styles.screenSize.sm}) {
		flex-direction: column;
		& > *:last-child {
			margin-left: 0;
			margin-top: ${styles.distances.md};
		}
	}
`;
export const CreateRecepieGrid = styled.div`
	margin-top: ${styles.distances.mdPlus};
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: ${styles.distances.md};
`;
export const CreateRecepieUploadWrapper = styled.div`
	margin-top: ${styles.distances.mdPlus};
`;
export const CreateRecepieGridContent = styled.div`
	padding: ${styles.distances.mdPlus};
`;
export const CreateRecepieGridContentItem = styled.div`
	font-weight: normal;
	font-size: 14px;
	line-height: 22px;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	&:not(:last-child) {
		margin-bottom: ${styles.distances.xs};
	}
`;
export const CreateRecepieGridContentDeleate = styled(SvgClose)`
	width: 17px;
	height: 17px;
	cursor: pointer;
	path {
		fill: ${({ theme }) => theme.colors.textMain};
	}
`;
