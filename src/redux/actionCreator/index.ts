import * as recepiesAction from './recepies';
import * as cookbooksAction from './cookbooks';
import * as userAction from './user';

export default { ...recepiesAction, ...cookbooksAction, ...userAction };
