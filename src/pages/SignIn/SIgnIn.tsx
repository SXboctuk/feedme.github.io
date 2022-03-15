import React from 'react';
import { useTranslation } from 'react-i18next';
import AuthFormWrapper from '../../components/AuthFormWrapper';
import AuthWrapper from '../../components/AuthWrapper';
import Input from '../../components/Input';
import Button from '../../components/shared/Button';
import { constImagePath } from '../../constants/imagePath';
import { routePath } from '../../constants/routePath';
import { SignupButtonWrapper, SignupputWrapper } from './SignIn.Styled';

const SIgnIn = (props: {
	handlerFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	handlerLogin: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	handlerPassword: (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => void;
	loginError: string;
	passwordError: string;
	loginValue: string;
	passwordValue: string;
	responseMessage: string;
}) => {
    const {
        handlerLogin,
        handlerPassword,
        loginError,
        passwordError,
        loginValue,
        passwordValue,
        handlerFormSubmit,
        responseMessage,
    } = props;
    const { t } = useTranslation();

    return (
        <AuthWrapper imageSrc={constImagePath.SIGN_IN} positionX={'left'}>
            <AuthFormWrapper
                linkText={t('createAnAccount')}
                linkPath={'/' + routePath.SIGN_UP}
                underTitleText={t('signinUnderTitle')}
                title={t('signinTitle')}
            >
                <div>{responseMessage}</div>
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
                            labelText={t('password')}
                            handlerInput={handlerPassword}
                            error={passwordError}
                            type={'password'}
                            value={passwordValue}
                            forgotLink
                        />
                    </SignupputWrapper>

                    <SignupButtonWrapper>
                        <Button type="submit" variant={'solid'} wide>
                            {t('signin')}
                        </Button>
                    </SignupButtonWrapper>
                </form>
            </AuthFormWrapper>
        </AuthWrapper>
    );
};

export default SIgnIn;
