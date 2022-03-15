export const responseInResepieCard = (arr: any[]) => {
    const data = arr.map((elem: any) => {
        return {
            id: elem.id,
            viewsCounter: elem.view,
            titleName: elem.title,
            creatorName: elem.User.name,
            creatorId: elem.UserId,
            imageSrc: elem.imagePath,
            likesCounter: elem.likesCounter,
            isLikes: elem.isLike,
            isSaved: elem.isSaved,
            commentsCounter: elem.commentCounter,
            text: elem.description,
            cookingTime: elem.cookingTime,
        };
    });

    return data;
};
