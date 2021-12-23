export interface ISectionProps {
	children: JSX.Element | JSX.Element[];
	variant: 'outline' | 'white' | 'solid';
	nameTitle: string;
	title: string;
	buttonText: string;
	background: boolean;
	nameTitleColor?: string;
}
