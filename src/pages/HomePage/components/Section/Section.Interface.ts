export interface ISectionProps extends React.HTMLProps<HTMLDivElement> {
	variant: 'outline' | 'white' | 'solid';
	sectionTitle: string;
	title: string;
	buttonText: string;
	background: boolean;
	colorNameTitle?: string;
	buttonOnClick: () => void;
}
