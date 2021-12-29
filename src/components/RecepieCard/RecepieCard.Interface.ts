export interface RecepieCardProps {
	to: string;
	key: string;
	viewsCounter: number;
	titleName: string;
	creatorName: string;
	imageSrc: string;
	likesCounter?: number;
	commentsCounter?: number;
	fontSizeCreator?: string;
}

export interface StyledRecepieCardInnerBlockProps {
	marginBottom?: string;
	marginTop?: string;
	margin?: string;
}

export interface RecepieCardCreatorProps {
	fontSizeCreator?: string;
}
