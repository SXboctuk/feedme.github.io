import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileCookbooks from '.';
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
	const [showCreate, setShowCreate] = useState(false);
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
			setUserData({
				userName: 'UserName',
				imageSrc: '/public/assets/images/SignIn.jpg',
				userText: 'UserTEXT',
			});
		}

		//fetch user recepies by params.id
		fetchUserCookbooks(params.id || '');
	}, []);
	return (
		<ProfileCookbooks
			userData={userData}
			userCookbooks={cookbooks}
			error={error}
			loadingCookbooks={loading}
			isOwner={isOwner}
			cookbookid={params.cookbookid}
			showCreate={showCreate}
			setShowCreate={setShowCreate}
		/>
	);
};

export default ProfileCookbooksContainer;
