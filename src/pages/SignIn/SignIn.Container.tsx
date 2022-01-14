import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAction } from '../../hooks/useAction';

const SignInContainer = () => {
	const { SignInUser } = useAction();

	const navigate = useNavigate();

	useEffect(() => {
		SignInUser('UserName', 'UserPassword');
		navigate(-1);
	}, []);

	return <div></div>;
};

export default SignInContainer;
