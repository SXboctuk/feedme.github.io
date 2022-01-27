import * as recepiesAction from './recepies';
import * as cookbooksAction from './cookbooks';
import * as userAction from './user';
import * as userRecepiesAction from './userRecepies';
import * as userCookbooksAction from './userCookbooks';

export default {
	...recepiesAction,
	...cookbooksAction,
	...userAction,
	...userRecepiesAction,
	...userCookbooksAction,
};
