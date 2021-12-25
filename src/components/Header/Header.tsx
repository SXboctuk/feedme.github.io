import React, { createRef } from 'react';
import { routePath } from '../../constants/routePath';
import Button from '../Button';
import HeaderSearch from '../HeaderSearch';
import InnerContainer from '../InnerContainer';
import LinkWithStyles from '../LinkWithStyles';
import Logo from '../Logo';
import SvgHamburgetButton from '../Svg/SvgHamburgerButton/SvgHamburget';
import { HeaderHamburger, HeaderNavBlock, HeaderStyled } from './Header.Styled';

const Header = () => {
	const headerNavBlockRef = createRef<HTMLDivElement>();

	const hamburgerHandler = () => {
		headerNavBlockRef.current?.classList.toggle('opened');
	};
	return (
		<InnerContainer>
			<HeaderStyled>
				<Logo />
				<HeaderNavBlock ref={headerNavBlockRef}>
					<LinkWithStyles to={routePath.RECEPIES}>
						Recepies
					</LinkWithStyles>
					<LinkWithStyles to={routePath.COOKBOOKS}>
						Cookbooks
					</LinkWithStyles>
					<HeaderSearch />
					<Button variant="outline">Create Cookbook</Button>
					<LinkWithStyles to={routePath.SIGNIN}>
						Sign In
					</LinkWithStyles>
				</HeaderNavBlock>
				<HeaderHamburger>
					<SvgHamburgetButton
						onClick={() => {
							hamburgerHandler();
						}}
					/>
				</HeaderHamburger>
			</HeaderStyled>
		</InnerContainer>
	);
};

export default Header;
