import styled from 'styled-components';
import styles from '../../../constants/stylesProperty';

export const SpinnerWrapper = styled.div`
	margin: ${styles.distances.mdPlus} auto;
	width: 100%;
	text-align: center;
`;

export const SpinntrLogoWrapper = styled.div`
	svg {
		height: 100px;
		width: 100px;

		transform: scale(1);
		opacity: 0.3;
		animation: pulse 2s infinite;

		@keyframes pulse {
			0% {
				transform: scale(1);
				opacity: 0.3;
			}

			70% {
				transform: scale(0.8);
				opacity: 1;
			}

			100% {
				transform: scale(1);
				opacity: 0.3;
			}
		}
	}
`;
