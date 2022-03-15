import { combineReducers } from 'redux';
import { cookbooksReducer } from './CookbooksReducer/CookbooksReducer';
import { recepiesReducer } from './RecepiesReducer/RecepiesReducer';
import { userCookbooksReducer } from './UserCookbooksReducer/UserCookbooksReducer';
import { userRecepiesReducer } from './UserRecepieReducer/UserRecepiesReducer';
import { userReducer } from './UserReducer/UserReducer';

export const rootReducer = combineReducers({
    cookbooksReducer,
    recepiesReducer,
    userReducer,
    userRecepiesReducer,
    userCookbooksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
