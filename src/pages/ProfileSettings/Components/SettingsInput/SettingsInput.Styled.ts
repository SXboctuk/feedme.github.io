import styled from 'styled-components';
import styles from '../../../../constants/stylesProperty';

export const SettingItem = styled.div`
	display: flex;
	align-items: flex-start;
	font-weight: normal;
	font-size: 18px;
	line-height: 22px;
	color: ${({ theme }) => theme.colors.textMain};
`;

export const SettingsItemName = styled.div`
	max-width: 104px;
	width: 100%;
	@media (max-width: ${styles.screenSize.sm}) {
		max-width: none;
		width: auto;
		margin-right: ${styles.distances.sm};
	}
`;

export const SettingsItemInput = styled.input`
	background: none;
	border: none;
	min-width: 70px;
	max-width: 300px;
	text-overflow: ellipsis;
	width: min-content;

	&:focus {
		outline: none;
	}
	&:disabled {
	}
	@media (max-width: ${styles.screenSize.sm}) {
		max-width: 30vw;
	}
`;
export const SettingsButtonsWrapper = styled.div`
	display: flex;
	align-items: flex-start;
	flex-wrap: wrap;
	@media (max-width: ${styles.screenSize.sm}) {
		& > *:first-child {
			padding-bottom: 10px;
		}
	}
`;
export const SettingItemWrapper = styled.div`
	position: relative;
	&:after {
		display: block;
		content: '';
		width: 100%;

		height: 2px;
		background: ${({ theme }) => theme.colors.primary};
		position: absolute;
		bottom: 2;
		left: 0;
	}
`;
export const SettingsItemValue = styled.div`
	margin-right: ${styles.distances.md};
`;

export const SettingsItemButton = styled.button`
	color: ${({ theme }) => theme.colors.primary};
	border: 0;
	background: none;
	cursor: pointer;
	margin-left: ${styles.distances.md};
`;

export const SettingErrorText = styled.div`
	color: ${({ theme }) => theme.colors.danger};
`;
