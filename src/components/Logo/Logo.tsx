import React from 'react';
import { routePath } from '../../constants/routePath';
import { logoPartFeed, logoPartMe } from '../../constants/source';
import SvgLogo from '../Svg/SvgLogo';
import { LogoLink, LogoText, LogoTextPrimary } from './Logo.Styled';

const Logo = (props: {
	color?: string;
	fontSize?: string;
	svgSize?: number;
}) => {
	const { color, fontSize, svgSize } = props;
	return (
		<LogoLink to={routePath.HOMEPAGE}>
			<SvgLogo
				width={svgSize ? svgSize * 0.7 : 25 * 0.7}
				height={svgSize ? svgSize : 25}
			/>
			<LogoText color={color} fontSize={fontSize}>
				{logoPartFeed}
				<LogoTextPrimary>{logoPartMe}</LogoTextPrimary>
			</LogoText>
		</LogoLink>
	);
};

export default Logo;
