import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../constants/stylesProperty';

export const ProfileNavigationBlock = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-end;
	flex-wrap: wrap;
	width: 100%;
	@media (max-width: ${styles.screenSize.sm}) {
		flex-direction: column;
		align-items: center;
	}
	/* & > *:last-child {
		padding-top: ${styles.distances.sm};
	} */
`;

export const ProfileNavigationItemsBlock = styled.div`
	margin-top: ${styles.distances.xl};
	display: flex;

	@media (max-width: ${styles.screenSize.sm}) {
		flex-direction: column;
		align-items: center;
	}
`;
export const ProfileNavigationButtonWrapper = styled.div`
	@media (max-width: ${styles.screenSize.sm}) {
		margin-top: ${styles.distances.mdPlus};
	}
`;
export const ProfileNavigationItem = styled(Link)`
	font-family: 'Montserrat';
	font-weight: 600;
	font-size: 20px;
	line-height: 24px;
	color: ${({ theme }) => theme.colors.textMain};
	position: relative;

	&:not(:last-child) {
		margin-right: ${styles.distances.lg};
	}
	@media (max-width: ${styles.screenSize.sm}) {
		&:not(:last-child) {
			margin-right: 0;
			margin-bottom: ${styles.distances.md};
		}
	}
	&.active {
		&:after {
			display: block;
			content: '';
			width: 100%;

			height: 4px;
			background: ${({ theme }) => theme.colors.primary};
			border-radius: ${({ theme }) => theme.borderRadius};
			position: absolute;
			bottom: -4px;
			left: 0;
		}
	}
`;
