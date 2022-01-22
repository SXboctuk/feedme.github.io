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
	handlerLogin: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handlerPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handlerPasswordConfirm: (e: React.ChangeEvent<HTMLInputElement>) => void;
	loginError: string;
	passwordError: string;
	passwordConfirmError: string;
}) => {
	const {
		handlerLogin,
		handlerPassword,
		loginError,
		passwordError,
		handlerPasswordConfirm,
		passwordConfirmError,
	} = props;
	const { t } = useTranslation();
	return (
		<AuthWrapper imageSrc={constImagePath.SIGN_IN} positionX={'left'}>
			<AuthFormWrapper
				linkText={t('signin')}
				linkPath={routePath.SIGN_IN}
				underTitleText={t('signupUnderTitle')}
				title={t('signupTitle')}
			>
				<form>
					<SignupputWrapper>
						<Input
							labelText={t('login')}
							handlerInput={handlerLogin}
							error={loginError}
						/>
					</SignupputWrapper>
					<SignupputWrapper>
						<Input
							labelText={t('password')}
							handlerInput={handlerPassword}
							error={passwordError}
							type={'password'}
							forgotLink
						/>
					</SignupputWrapper>
					<SignupputWrapper>
						<Input
							labelText={t('passwordConfirm')}
							handlerInput={handlerPasswordConfirm}
							error={passwordConfirmError}
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
