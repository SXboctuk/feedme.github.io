import React from 'react';
import { logoPartFeed, logoPartMe } from '../../constants/source';
import SvgLogo from '../Svg/SvgLogo';
import { LogoLink, LogoText, LogoTextPrimary } from './Logo.Styled';

const Logo = (props: React.HTMLProps<HTMLDivElement>) => {
	const { color } = props;
	return (
		<LogoLink to={'/'}>
			<SvgLogo />
			<LogoText color={color}>
				{logoPartFeed}
				<LogoTextPrimary>{logoPartMe}</LogoTextPrimary>
			</LogoText>
		</LogoLink>
	);
};

export default Logo;
