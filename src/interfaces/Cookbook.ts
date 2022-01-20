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
	views: number;
	comments: IComment[];
	recepies: CardRecepie[];
}
