import React from 'react';
import SvgLogo from '../Svg/SvgLogo';
import { LogoLink, LogoText, LogoTextPrimary } from './Logo.Styled';

const Logo = (props: React.HTMLProps<HTMLDivElement>) => {
	const { color } = props;
	return (
		<LogoLink to={'/'}>
			<SvgLogo />
			<LogoText color={color}>
				Feed
				<LogoTextPrimary>me</LogoTextPrimary>
			</LogoText>
		</LogoLink>
	);
};

export default Logo;
