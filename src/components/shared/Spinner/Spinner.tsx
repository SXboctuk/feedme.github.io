import React from 'react';
import SvgLogo from '../../Svg/SvgLogo';
import { SpinnerWrapper, SpinntrLogoWrapper } from './Spinner.Styled';

const Spinner = () => {
	return (
		<SpinnerWrapper>
			<SpinntrLogoWrapper>
				<SvgLogo />
			</SpinntrLogoWrapper>
		</SpinnerWrapper>
	);
};

export default Spinner;
