import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileRecepies from '.';
import { useAction } from '../../hooks/useAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUser } from '../../interfaces/User';

const ProfileRecepiesContainer = () => {
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
	const { recepies, error, loading } = useTypedSelector(
		(state) => state.userRecepiesReducer,
	);
	const { fetchUserRecepies } = useAction();
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
		fetchUserRecepies(params.id || '');
	}, []);
	return (
		<ProfileRecepies
			userData={userData}
			userRecepies={recepies}
			error={error}
			loadingRecepies={loading}
			isOwner={isOwner}
			recipeid={params.recipeid}
			showCreate={showCreate}
			setShowCreate={setShowCreate}
		/>
	);
};

export default ProfileRecepiesContainer;
