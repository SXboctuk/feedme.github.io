export interface IButtonProps extends React.HTMLProps<HTMLButtonElement> {
	variant: 'outline' | 'white' | 'solid' | 'outlineAdd' | 'solidSend';
	wide?: true;
}
