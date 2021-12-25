export interface HomePageCardProps {
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

export interface StyledHomePageCardInnerBlockProps {
	marginBottom?: string;
	marginTop?: string;
	margin?: string;
}

export interface HomePageCardCreatorProps {
	fontSizeCreator?: string;
}
