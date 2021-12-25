import Image1 from './Image/1.jpg';
import Image2 from './Image/2.png';
import Image3 from './Image/3.png';
import Image4 from './Image/4.jpg';

import { ourChoiceCardProps } from '../../../pages/HomePage/components/OurChoiceCard/OurChoiceCard.Interface';

export const OurChoiceDataMock: ourChoiceCardProps[] = [
	{
		buttonText: 'Pancakes',
		image: Image1,
		cookbookId: '1',
	},
	{
		buttonText: 'Fruits',
		image: Image2,
		cookbookId: '2',
	},
	{
		buttonText: 'Fast Breakfast',
		image: Image3,
		cookbookId: '3',
	},
	{
		buttonText: 'Ice Cream',
		image: Image4,
		cookbookId: '4',
	},
];
