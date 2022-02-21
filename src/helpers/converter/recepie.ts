export const responseInRecepie = (resData: any) => {
	const elem = resData.recepie;
	let comments = [];
	if (elem.RecepieComments) {
		comments = elem.RecepieComments.map((comment: any) => {
			return {
				imageSrc: comment.User.imagePath,
				userName: comment.User.name,
				userId: comment.UserId,
				createDate: new Date(comment.createdAt),
				textComment: comment.text,
			};
		});
	}

	const data = {
		image: elem.imagePath,
		id: elem.id,
		title: elem.title,
		creatorName: elem.User.name,
		creatorId: elem.UserId,
		mainText: elem.description,
		cookingTime: elem.cookingTime,
		directions: JSON.parse(elem.directions),
		ingredients: JSON.parse(elem.ingredients),
		likes: resData.likesCounter,
		isLikes: resData.isLike,
		isSaved: resData.isSaved,
		views: elem.view,
		comments: comments,
	};

	return data;
};
