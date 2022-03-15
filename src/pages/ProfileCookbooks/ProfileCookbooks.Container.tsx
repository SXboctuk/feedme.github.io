import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileCookbooks from '.';
import { getUserById } from '../../api/Feedme.Api';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUser } from '../../interfaces/User';

const ProfileCookbooksContainer = () => {
    const params = useParams();
    const [userData, setUserData] = useState<IUser>({
        userName: '',
        imageSrc: '',
        userText: '',
    });
    const { id, image, userName, userText } = useTypedSelector(
        (state) => state.userReducer,
    );
    const { cookbooks, error, loading } = useTypedSelector(
        (state) => state.userCookbooksReducer,
    );
    const { fetchUserCookbooks } = useAction();
    const isOwner = params.id === id;
    useEffect(() => {
        if (isOwner) {
            setUserData({
                userName: userName,
                imageSrc: image,
                userText: userText,
            });
        } else {
            //fetch user by params.id
            const fetchUser = async () => {
                if (params.id) {
                    const data = await (await getUserById(params.id)).json();
                    setUserData({
                        userName: await data.userName,
                        imageSrc: await data.imageSrc,
                        userText: await data.userText,
                    });
                }
            };
            fetchUser();
        }

        //fetch user recepies by params.id
        if (params.id) {
            fetchUserCookbooks(params.id);
        }
    }, [params]);
    return (
        <ProfileCookbooks
            userData={userData}
            userCookbooks={cookbooks}
            error={error}
            loadingCookbooks={loading}
            isOwner={isOwner}
        />
    );
};

export default ProfileCookbooksContainer;
