import { CardRecepie } from './CardRecipe';
import { IComment } from './Comment';

export interface ICookbook {
	image: string;
	id: string;
	creatorName: string;
	creatorId: string;
	title: string;
	mainText: string;
	likes: number;
	isLikes: boolean;
	views: number;
	comments: IComment[];
	recepies: CardRecepie[];
}
