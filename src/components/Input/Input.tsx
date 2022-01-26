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
	TextAreaStyled,
} from './Input.Styled';

const Input = (props: {
	labelText: string | React.ReactNode;
	textArea?: true;
	placeholder?: string;
	handlerInput: (e: React.ChangeEvent) => void;
	value: string;
	error?: string | null;
	type?: 'password';
	forgotLink?: true;
}) => {
	const { t } = useTranslation();
	const {
		textArea,
		labelText,
		handlerInput,
		error,
		type,
		forgotLink,
		value,
		placeholder,
	} = props;
	const [hidden, setHidden] = useState(true);

	if (textArea) {
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
					<TextAreaStyled
						value={value}
						className={error ? 'error' : ''}
						onChange={handlerInput}
						placeholder={placeholder ? placeholder : ''}
					></TextAreaStyled>
				</InputWrapper>

				{error ? <InputError>{error}</InputError> : null}
			</InputBlock>
		);
	}
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
					value={value}
					className={error ? 'error' : ''}
					onChange={handlerInput}
					type={type === 'password' && hidden ? 'password' : ''}
					placeholder={placeholder ? placeholder : ''}
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
