import { createGlobalStyle } from 'styled-components';

import NunitoRegular from '../../../public/font/Nunito/Nunito-Regular.ttf';
import NunitoSemiBold from '../../../public/font/Nunito/Nunito-SemiBold.ttf';
import NunitoBold from '../../../public/font/Nunito/Nunito-Bold.ttf';
import MontserratRegular from '../../../public/font/Montserrat/Montserrat-Regular.ttf';
import MontserratSemiBold from '../../../public/font/Montserrat/Montserrat-SemiBold.ttf';
import MontserratBold from '../../../public/font/Montserrat/Montserrat-Bold.ttf';
import RobotoRegular from '../../../public/font/Roboto/Roboto-Regular.ttf';

const GlobalStylesStyled = createGlobalStyle`
	/*CSS RESET*/
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
		text-decoration: none;
	}

	article, aside, details, figcaption, figure, 
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	ol, ul {
		list-style: none;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
	*, *::after, *::before {
    box-sizing: border-box;
	}
	img {
		max-width: 100%
	}

	html {
	line-height: 1.15; 
	-webkit-text-size-adjust: 100%; 
	}
	body {
	margin: 0;
	}
	main {
	display: block;
	}
	hr {
	box-sizing: content-box; 
	height: 0; 
	overflow: visible; 
	}
	pre {
	font-family: monospace, monospace; 
	font-size: 1em; 
	}
	a {
	background-color: transparent;
	text-decoration: none;

	&:hover {
		text-decoration: none;
	}
	}
	abbr[title] {
	border-bottom: none; 
	text-decoration: underline; 
	text-decoration: underline dotted; 
	}
	b,
	strong {
	font-weight: bolder;
	}
	code,
	kbd,
	samp {
	font-family: monospace, monospace; 
	font-size: 1em; 
	}
	small {
	font-size: 80%;
	}
	sub,
	sup {
	font-size: 75%;
	line-height: 0;
	position: relative;
	vertical-align: baseline;
	}
	sub {
	bottom: -0.25em;
	}
	sup {
	top: -0.5em;
	}
	img {
	border-style: none;
	}
	button,
	input,
	optgroup,
	select,
	textarea {
	font-family: inherit; 
	font-size: 100%; 
	line-height: 1.15; 
	margin: 0; 
	}
	button,
	input { 
	overflow: visible;
	}
	button,
	select { 
	text-transform: none;
	}
	button,
	[type="button"],
	[type="reset"],
	[type="submit"] {
	-webkit-appearance: button;
	}
	button::-moz-focus-inner,
	[type="button"]::-moz-focus-inner,
	[type="reset"]::-moz-focus-inner,
	[type="submit"]::-moz-focus-inner {
	border-style: none;
	padding: 0;
	}
	button:-moz-focusring,
	[type="button"]:-moz-focusring,
	[type="reset"]:-moz-focusring,
	[type="submit"]:-moz-focusring {
	outline: 1px dotted ButtonText;
	}
	fieldset {
	padding: 0.35em 0.75em 0.625em;
	}
	legend {
	box-sizing: border-box; 
	color: inherit; 
	display: table; 
	max-width: 100%; 
	padding: 0; 
	white-space: normal; 
	}
	progress {
	vertical-align: baseline;
	}
	textarea {
	overflow: auto;
	}
	[type="checkbox"],
	[type="radio"] {
	box-sizing: border-box; 
	padding: 0; 
	}
	[type="number"]::-webkit-inner-spin-button,
	[type="number"]::-webkit-outer-spin-button {
	height: auto;
	}
	[type="search"] {
	-webkit-appearance: textfield; 
	outline-offset: -2px; 
	}
	[type="search"]::-webkit-search-decoration {
	-webkit-appearance: none;
	}
	::-webkit-file-upload-button {
	-webkit-appearance: button; 
	font: inherit; 
	}
	details {
	display: block;
	}
	summary {
	display: list-item;
	}
	template {
	display: none;
	}
	[hidden] {
	display: none;
	}
	
	@font-face {
		font-family: 'Nunito';
		src: url(${NunitoRegular}) format('truetype');
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: 'Nunito';
		src: url(${NunitoSemiBold}) format('truetype');
		font-weight: 600;
		font-style: normal;
	}
	@font-face {
		font-family: 'Nunito';
		src: url(${NunitoBold}) format('truetype');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'Montserrat';
		src: url(${MontserratRegular}) format('truetype');
		font-weight: 400;
		font-style: normal;
	}
	@font-face {
		font-family: 'Montserrat';
		src: url(${MontserratSemiBold})format('truetype');
		font-weight: 600;
		font-style: normal;
	}
	@font-face {
		font-family: 'Montserrat';
		src: url(${MontserratBold}) format('truetype');
		font-weight: 700;
		font-style: normal;
	}

	@font-face {
		font-family: 'Roboto';
		src: url(${RobotoRegular}) format('truetype');
		font-weight: 400;
		font-style: normal;
	}


	body {
		font-family:'Nunito', 'Noto Sans Display', sans-serif;
		
	}
`;

export default GlobalStylesStyled;
