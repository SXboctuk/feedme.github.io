import {} from 'styled-components';
import { themeInterface } from './theme.Interface';
declare module 'styled-components' {
	export interface DefaultTheme extends themeInterface {} // extends the global DefaultTheme with our ThemeType.
}
