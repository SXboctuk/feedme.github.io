import { responseInResepieCard } from './recepieCard';

export const responseInCookbook = (resData: any) => {
	const elem = resData.cookbook;
	let comments = [];
	if (elem.CookbookComments) {
		comments = elem.CookbookComments.map((comment: any) => {
			return {
				imageSrc: comment.User.imagePath,
				userName: comment.User.name,
				userId: comment.UserId,
				createDate: new Date(comment.createdAt),
				textComment: comment.text,
			};
		});
	}
	console.log(comments);
	let recepies: any = [];
	if (resData.recepies) {
		recepies = responseInResepieCard(resData.recepies);
	}

	const data = {
		image: elem.imagePath,
		id: elem.id,
		title: elem.title,
		creatorName: elem.User.name,
		creatorId: elem.UserId,
		mainText: elem.description,
		isVegatarian: elem.isVegatarian,
		isWithoutMilk: elem.isWithoutMilk,
		isWithouEggs: elem.isWithouEggs,
		likes: resData.likesCounter,
		isLikes: resData.isLike,
		isSaved: resData.isSaved,
		views: elem.view,
		comments: comments,
		recepies: recepies,
	};

	return data;
};
