import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as ExapleActionCreators from '../redux/actionCreator/exaple';

export const useAction = () => {
	const dispatch = useDispatch();
	return bindActionCreators(ExapleActionCreators, dispatch);
};
