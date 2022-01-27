import { ICookbook } from '../../interfaces/Cookbook';

export const cookbookMockData: ICookbook = {
	image: '/public/mocks/Image/card1.jpg',
	id: 'string',
	creatorName: 'Sir John Reed',
	creatorId: '123',
	title: 'Lorem ipsum dolor sit amet, consecteturadipiscing elit.',
	mainText:
		'Lorem ipsum dolor sit amet, consecteturadipiscing elit. Vel sit adipiscingdignissim feugiat consectetur. Dolor urnavitae vitae etiam sed commodo. Cursus semperdiam commodo laoreet purus orci sed. Nullavarius interdum euismod vestibulum tempusscelerisque felis mauris. Sed neque laoreethabitant pharetra luctus.',
	likes: 120,
	views: 200,
	recepies: [
		{
			to: `1`,
			key: 'card1',
			viewsCounter: 11000,
			titleName: 'Fresh meat',
			creatorId: '13',
			creatorName: 'John Doe',
			imageSrc: '/public/mocks/Image/card1.jpg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna amet etiam risus aliquet sit vel',
			likesCounter: 100,
			commentsCounter: 12,
			cookingTime: 60,
		},
		{
			to: `2`,
			key: 'card2',
			viewsCounter: 12000,
			titleName: 'Fresh meat',
			creatorId: '13',
			creatorName: 'John Doe',
			imageSrc: '/public/mocks/Image/card1.jpg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna amet etiam risus aliquet sit vel',
			likesCounter: 200,
			commentsCounter: 12,
			cookingTime: 80,
		},
		{
			to: `3`,
			key: 'card3',
			viewsCounter: 13000,
			titleName: 'Fresh meat',
			creatorId: '13',
			creatorName: 'John Doe',
			imageSrc: '/public/mocks/Image/card1.jpg',
			text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna amet etiam risus aliquet sit vel',
			likesCounter: 300,
			commentsCounter: 12,
			cookingTime: 90,
		},
	],
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
