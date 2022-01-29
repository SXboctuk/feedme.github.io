import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const ProfileSettingsContentWrapper = styled.div`
	margin-top: ${styles.distances.xl};
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: ${styles.distances.xxl} ${styles.distances.xl};
	margin-bottom: ${styles.distances.mdPlus};
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.08);

	@media (max-width: ${styles.screenSize.sm}) {
		padding: ${styles.distances.xxl} ${styles.distances.sm};
	}
`;

export const ProfileSettingsMainTitle = styled.div`
	font-family: 'Montserrat';
	font-weight: bold;
	font-size: 40px;
	line-height: 48px;
	color: ${({ theme }) => theme.colors.textMain};
`;

export const ProfileSettingsItemsBlock = styled.div`
	font-weight: normal;
	font-size: 18px;
	line-height: 22px;
	color: ${({ theme }) => theme.colors.textMain};
	padding-top: ${styles.distances.lg};
	& > *:not(:first-child) {
		margin-top: ${styles.distances.mdPlus};
	}
`;

export const ProfileSettingsDelete = styled.div`
	cursor: pointer;
	margin-top: ${styles.distances.xxl};
	font-size: 18px;
	color: ${({ theme }) => theme.colors.danger};
`;
