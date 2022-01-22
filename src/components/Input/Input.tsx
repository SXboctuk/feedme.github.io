import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { routePath } from '../../constants/routePath';
import {
	InputBlock,
	InputError,
	InputHeaderBlock,
	InputHiddenIcon,
	InputLabel,
	InputLink,
	InputStyled,
	InputWrapper,
} from './Input.Styled';

const Input = (props: {
	labelText: string;
	handlerInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error?: string | null;
	type?: 'password';
	forgotLink?: true;
}) => {
	const { t } = useTranslation();
	const { labelText, handlerInput, error, type, forgotLink } = props;
	const [hidden, setHidden] = useState(true);
	return (
		<InputBlock>
			<InputHeaderBlock>
				<InputLabel>{labelText}</InputLabel>
				{forgotLink ? (
					<InputLink to={routePath.FORGOT_PASSWORD}>
						{t('forgotPassword')}
					</InputLink>
				) : null}
			</InputHeaderBlock>
			<InputWrapper>
				<InputStyled
					className={error ? 'error' : ''}
					onChange={handlerInput}
					type={type === 'password' && hidden ? 'password' : ''}
				></InputStyled>
				{type === 'password' ? (
					<InputHiddenIcon
						onClick={() => {
							setHidden(!hidden);
						}}
						className={!hidden ? 'active' : ''}
					/>
				) : null}
			</InputWrapper>

			{error ? <InputError>{error}</InputError> : null}
		</InputBlock>
	);
};

export default Input;
