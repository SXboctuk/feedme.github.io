export const setRecepieLike = async (value: boolean, id: string) => {
	console.log('post like: ' + value + '\n get like: ' + !value);
	return { value: !value, currentLikesCounter: 199 };
};

export const setCookbookLike = async (value: boolean, id: string) => {
	console.log('post like: ' + value + '\n get like: ' + !value);
	return { value: !value, currentLikesCounter: 199 };
};
