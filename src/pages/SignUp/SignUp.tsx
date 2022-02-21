import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthFormWrapper from '../../components/AuthFormWrapper';
import AuthWrapper from '../../components/AuthWrapper';
import Input from '../../components/Input';
import Button from '../../components/shared/Button';
import { constImagePath } from '../../constants/imagePath';
import { routePath } from '../../constants/routePath';
import { SignupputWrapper, SignupButtonWrapper } from './SignUp.Styled';

const SignUp = (props: {
	handlerLogin: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	handlerUsername: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	handlerPassword: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	handlerPasswordConfirm: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	handlerFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	loginError: string;
	usernameError: string;
	passwordError: string;
	passwordConfirmError: string;
	loginValue: string;
	usernameValue: string;
	passwordValue: string;
	passwordConfirmValue: string;
}) => {
	const {
		handlerLogin,
		handlerUsername,
		handlerPassword,
		loginError,
		usernameError,
		passwordError,
		handlerPasswordConfirm,
		passwordConfirmError,
		handlerFormSubmit,
		loginValue,
		usernameValue,
		passwordValue,
		passwordConfirmValue,
	} = props;
	const { t } = useTranslation();
	return (
		<AuthWrapper imageSrc={constImagePath.SIGN_IN} positionX={'left'}>
			<AuthFormWrapper
				linkText={t('signin')}
				linkPath={'/' + routePath.SIGN_IN}
				underTitleText={t('signupUnderTitle')}
				title={t('signupTitle')}
			>
				<form onSubmit={handlerFormSubmit}>
					<SignupputWrapper>
						<Input
							labelText={t('login')}
							handlerInput={handlerLogin}
							error={loginError}
							value={loginValue}
						/>
					</SignupputWrapper>
					<SignupputWrapper>
						<Input
							labelText={t('username')}
							handlerInput={handlerUsername}
							error={usernameError}
							value={usernameValue}
						/>
					</SignupputWrapper>
					<SignupputWrapper>
						<Input
							labelText={t('password')}
							handlerInput={handlerPassword}
							error={passwordError}
							type={'password'}
							value={passwordValue}
							forgotLink
						/>
					</SignupputWrapper>
					<SignupputWrapper>
						<Input
							labelText={t('passwordConfirm')}
							handlerInput={handlerPasswordConfirm}
							error={passwordConfirmError}
							value={passwordConfirmValue}
							type={'password'}
						/>
					</SignupputWrapper>

					<SignupButtonWrapper>
						<Button type="submit" variant={'solid'} wide>
							{t('signup')}
						</Button>
					</SignupButtonWrapper>
				</form>
			</AuthFormWrapper>
		</AuthWrapper>
	);
};

export default SignUp;
