import React, { useEffect, useState } from 'react';
import { regexString } from '../../constants/regex';
import { routePath } from '../../constants/routePath';
import {
	InputContainer,
	InputSearchIcon,
	Input,
	InputSuggestionItem,
	InputSuggestionItemWrapper,
} from './HeaderSearch.Styled';

interface ISearchUser {
	userName: string;
	id: string;
}
const HeaderSearch = () => {
	const [searchValue, setSearchValue] = useState('');
	const [users, setUsers] = useState<ISearchUser[]>([]);
	const [suggestion, setSuggestion] = useState<ISearchUser[]>([]);

	const handlerSuggestion = (text: string) => {
		let matches: ISearchUser[] = [];
		if (text.length > 0) {
			matches = users.filter((elem) => {
				const regex = new RegExp(`${text}`, 'gi');
				return elem.userName.match(regex);
			});
		}
		setSuggestion(matches);
		console.log(suggestion);
	};
	const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value.match(regexString.IS_VALID_STRING) !== null) {
			setSearchValue(e.target.value);
			handlerSuggestion(searchValue);
		}
	};

	useEffect(() => {
		//fetch users
		setUsers([
			{ userName: 'Jon', id: '1' },
			{ userName: 'Ivan', id: '2' },
			{ userName: 'Max', id: '3' },
			{ userName: 'Vlad ster', id: '4' },
			{ userName: 'ConstantUser', id: '123' },
		]);
	}, []);

	return (
		<InputContainer>
			<Input onChange={handlerInput} value={searchValue} />
			<InputSearchIcon />
			{suggestion.length > 0 && searchValue.length > 0 ? (
				<InputSuggestionItemWrapper>
					{suggestion.slice(0, 3).map((elem, i) => (
						<InputSuggestionItem
							key={elem.userName + elem.id + i}
							to={routePath.PROFILE + elem.id}
							onClick={() => setSearchValue('')}
						>
							{elem.userName}
						</InputSuggestionItem>
					))}
				</InputSuggestionItemWrapper>
			) : null}
		</InputContainer>
	);
};

export default HeaderSearch;
