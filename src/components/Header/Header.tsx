import React, { createRef } from 'react';
import { routePath } from '../../constants/routePath';
import Button from '../shared/Button';
import HeaderSearch from '../HeaderSearch';
import Link from '../shared/Link';
import Logo from '../Logo';
import Container from '../shared/Container';
import SvgHamburgetButton from '../Svg/SvgHamburgerButton/SvgHamburget';
import {
	HeaderBackground,
	HeaderHamburger,
	HeaderNavBlock,
	HeaderStyled,
} from './Header.Styled';
import styles from '../../constants/stylesProperty';

const Header = () => {
	const headerNavBlockRef = createRef<HTMLDivElement>();

	const hamburgerHandler = () => {
		headerNavBlockRef.current?.classList.toggle('opened');
	};
	return (
		<HeaderBackground>
			<Container maxWidth={styles.screenSize.lg}>
				<HeaderStyled>
					<Logo />
					<HeaderNavBlock ref={headerNavBlockRef}>
						<Link to={routePath.RECEPIES}>Recepies</Link>
						<Link to={routePath.COOKBOOKS}>Cookbooks</Link>
						<HeaderSearch />
						<Button variant="outline">Create Cookbook</Button>
						<Link to={routePath.SIGNIN}>Sign In</Link>
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
