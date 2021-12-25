import { DefaultTheme } from 'styled-components';

export interface themeInterface extends DefaultTheme {
	colors: {
		textMain: string;
		primary: string;
		gray: string;
		grayDark: string;
		white: string;
	};
	displaySize: {
		xs: string;
		sm: string;
		md: string;
		lg: string;
	};
	borderRadius: string;
}
