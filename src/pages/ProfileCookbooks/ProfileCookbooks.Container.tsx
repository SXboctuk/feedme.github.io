import React from 'react';
import ProfileCookbooks from '.';

const ProfileCookbooksContainer = (props: { create?: true }) => {
	const { create } = props;
	return <ProfileCookbooks create={create} />;
};

export default ProfileCookbooksContainer;
