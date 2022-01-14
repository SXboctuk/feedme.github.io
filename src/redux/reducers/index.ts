import { combineReducers } from 'redux';
import { cookbooksReducer } from './CookbooksReducer/CookbooksReducer';
import { recepiesReducer } from './RecepiesReducer/RecepiesReducer';
import { userReducer } from './UserReducer/UserReducer';

export const rootReducer = combineReducers({
	cookbooksReducer,
	recepiesReducer,
	userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
