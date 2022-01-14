import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import action from '../redux/actionCreator';

export const useAction = () => {
	const dispatch = useDispatch();
	return bindActionCreators(action, dispatch);
};
