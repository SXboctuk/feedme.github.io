import React, { createRef } from 'react';
import { routePath } from '../../constants/routePath';
import Button from '../Button';
import HeaderSearch from '../HeaderSearch';
import LinkWithStyles from '../LinkWithStyles';
import Logo from '../Logo';
import Container from '../shared/Container';
import SvgHamburgetButton from '../Svg/SvgHamburgerButton/SvgHamburget';
import {
	HeaderBackground,
	HeaderHamburger,
	HeaderNavBlock,
	HeaderStyled,
} from './Header.Styled';

const Header = () => {
	const headerNavBlockRef = createRef<HTMLDivElement>();

	const hamburgerHandler = () => {
		headerNavBlockRef.current?.classList.toggle('opened');
	};
	return (
		<HeaderBackground>
			<Container maxWidth={1200}>
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
			</Container>
		</HeaderBackground>
	);
};

export default Header;
