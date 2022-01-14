import { combineReducers } from 'redux';
import { cookbooksReducer } from './CookbooksReducer/CookbooksReducer';
import { recepiesReducer } from './RecepiesReducer/RecepiesReducer';

export const rootReducer = combineReducers({
	cookbooksReducer,
	recepiesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
