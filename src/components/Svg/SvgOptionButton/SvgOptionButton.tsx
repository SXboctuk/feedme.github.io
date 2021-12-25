import React from 'react';
import {
	SvgOptionButtonBlock,
	SvgOptionButtonRound,
} from './SvgOptionButton.Styled';

const SvgOptionButton = () => {
	return (
		<SvgOptionButtonBlock>
			<SvgOptionButtonRound />
			<SvgOptionButtonRound />
			<SvgOptionButtonRound />
		</SvgOptionButtonBlock>
	);
};

export default SvgOptionButton;
