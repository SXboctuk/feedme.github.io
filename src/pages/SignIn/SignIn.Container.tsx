import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';

const SignInContainer = () => {
	const { signInUser } = useAction();

	const navigate = useNavigate();

	useEffect(() => {
		signInUser('UserName', 'UserPassword');
		navigate(-1);
	}, []);

	return <div></div>;
};

export default SignInContainer;
