import { IRecipe } from '../../interfaces/Recepi';

export const recipeMockData: IRecipe = {
	image: '/public/mocks/Image/card1.jpg',
	id: '56das',
	creatorName: 'Sir John Reed',
	creatorId: '123',
	title: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit.',
	mainText:
		'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Vel sit adipiscingdignissim feugiat consectetur. Dolor urnavitae vitae etiam sed commodo. Cursus semperdiam commodo laoreet purus orci sed. Nullavarius interdum euismod vestibulum tempusscelerisque felis mauris. Sed neque laoreethabitant pharetra luctus.',
	directions: ['some', 'some', 'some', 'some', 'some'],
	ingredients: ['some, 200g', 'some, 200g', 'some, 200g'],
	likes: 120,
	views: 200,
	comments: [
		{
			imageSrc: '/public/mocks/Image/card1.jpg',
			userName: 'Vasya Ked1',
			userId: '5',
			textComment:
				'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Vel sit adipiscingdignissim feugiat consectetur. Dolor urnavitae vitae etiam sed commodo. Cursus semperdiam commodo laoreet purus orci sed. Nullavarius interdum euismod vestibulum tempusscelerisque felis mauris. Sed neque laoreethabitant pharetra luctus.',
			createDate: new Date('2022-01-20T02:30'),
		},
		{
			imageSrc: '/public/mocks/Image/card1.jpg',
			userName: 'Vasya Ked',
			userId: '5',
			textComment:
				'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Vel sit adipiscingdignissim feugiat consectetur. Dolor urnavitae vitae etiam sed commodo. Cursus semperdiam commodo laoreet purus orci sed. Nullavarius interdum euismod vestibulum tempusscelerisque felis mauris. Sed neque laoreethabitant pharetra luctus.',
			createDate: new Date('2022-01-20T00:00'),
		},
		{
			imageSrc: '/public/mocks/Image/card1.jpg',
			userName: 'Vasya Ked',
			userId: '5',
			textComment:
				'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Vel sit adipiscingdignissim feugiat consectetur. Dolor urnavitae vitae etiam sed commodo. Cursus semperdiam commodo laoreet purus orci sed. Nullavarius interdum euismod vestibulum tempusscelerisque felis mauris. Sed neque laoreethabitant pharetra luctus.',
			createDate: new Date('Wed, 09 Aug 1995 00:00:00 GMT'),
		},
	],
};
