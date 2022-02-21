import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileRecepies from '.';
import { getUserById } from '../../api/Feedme.Api';
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
			fetchUserRecepies(params.id);
		}
	}, []);

	return (
		<ProfileRecepies
			userData={userData}
			userRecepies={recepies}
			error={error}
			loadingRecepies={loading}
			isOwner={isOwner}
		/>
	);
};

export default ProfileRecepiesContainer;
