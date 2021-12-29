import { RecepieCardProps } from '../../../components/RecepieCard/RecepieCard.Interface';
import { routePath } from '../../routePath';

import cardImage1 from './Image/card1.png';
import cardImage2 from './Image/card2.png';
import cardImage3 from './Image/card3.png';
import cardImage4 from './Image/card4.png';

export const userChoiceMockData: RecepieCardProps[] = [
	{
		to: `${routePath.RECEPIES}/1`,
		key: 'card1',
		viewsCounter: 12000,
		titleName: 'Fresh meat',
		creatorName: 'John Doe',
		imageSrc: cardImage1,
		likesCounter: 499,
		commentsCounter: 12,
	},
	{
		to: `${routePath.RECEPIES}/2`,
		key: 'card2',
		viewsCounter: 12000,
		titleName: 'Fresh meat',
		creatorName: 'John Doe',
		imageSrc: cardImage2,
		likesCounter: 499,
		commentsCounter: 12,
	},
	{
		to: `${routePath.RECEPIES}/3`,
		key: 'card3',
		viewsCounter: 12000,
		titleName: 'Fresh meat',
		creatorName: 'John Doe',
		imageSrc: cardImage3,
		likesCounter: 499,
		commentsCounter: 12,
	},
	{
		to: `${routePath.RECEPIES}/4`,
		key: 'card4',
		viewsCounter: 12000,
		titleName: 'Fresh meat',
		creatorName: 'John Doe',
		imageSrc: cardImage4,
		likesCounter: 499,
		commentsCounter: 12,
	},
];
