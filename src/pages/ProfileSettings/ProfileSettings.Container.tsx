import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ProfileSettings from '.';
import {
    deleteUser,
    updataUserEmail,
    updataUserName,
    updataUserPassword,
} from '../../api/Feedme.Api';
import { errorMassage } from '../../constants/errorMassage';
import { regexString } from '../../constants/regex';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const ProfileSettingsContainer = () => {
    const params = useParams();
    const { signOutUser, setNewEmail, setNewName } = useAction();
    const navigate = useNavigate();
    const user = useTypedSelector((state) => state.userReducer);

    const [errorName, setErrorName] = useState<string>('');
    const [errorEmail, setErrorEmail] = useState<string>('');
    const [errorPassword, setErrorPassword] = useState<string>('');

    const handlerSaveName = async (str: string) => {
        if (str.match(regexString.IS_STRING_SHORT) === null) {
            setErrorName(errorMassage.IS_SHORT);
            return false;
        }

        if (errorName.length === 0) {
            const res = await updataUserName(str);

            if (res.ok) {
                setNewName(str);
                return true;
            }
        }
        return false;
        //posr new user name
    };
    const handlerSaveEmail = async (str: string) => {
        if (str.match(regexString.IS_EMAIL) === null) {
            setErrorEmail(errorMassage.INVALID_EMAIL);
            return false;
        }

        if (errorName.length === 0) {
            const res = await updataUserEmail(str);
            if (res.ok) {
                setNewEmail(str);
                return true;
            }
        }
        return false;
        //post new user email
    };
    const handlerSavePassword = async (str: string) => {
        if (str.match(regexString.IS_STRING_SHORT) === null) {
            setErrorPassword(errorMassage.IS_SHORT);
            return false;
        }

        if (errorName.length === 0) {
            const res = await updataUserPassword(str);
            if (res.ok) {
                return true;
            }
        }
        return false;
        //post new user password
    };
    const handlerChangeName = () => {
        setErrorName('');
    };
    const handlerChangeEmail = () => {
        setErrorEmail('');
    };
    const handlerChangePassword = () => {
        setErrorPassword('');
    };

    const handlerDeleteUser = async () => {
        //send delete get resp

        const res = await deleteUser();
        if (res.ok) {
            signOutUser();
            navigate('/');
        }
    };

    const isOwner = params.id === user.id || false;
    return (
        <ProfileSettings
            isOwner={isOwner}
            user={user}
            handlerSaveName={handlerSaveName}
            handlerSaveEmail={handlerSaveEmail}
            handlerSavePassword={handlerSavePassword}
            handlerChangeName={handlerChangeName}
            handlerChangeEmail={handlerChangeEmail}
            handlerChangePassword={handlerChangePassword}
            errorName={errorName}
            errorEmail={errorEmail}
            errorPassword={errorPassword}
            handlerDeleteUser={handlerDeleteUser}
        />
    );
};

export default ProfileSettingsContainer;
