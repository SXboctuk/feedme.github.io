import React, { useEffect } from 'react';
import { signInWithCookie } from '../../api/Feedme.Api';
import { deleteCookie } from '../../helpers/cookie';
import { useAction } from '../../hooks/useAction';

const FirstRunApp = (props: { children: React.ReactNode }) => {
	const { signInUser } = useAction();
	useEffect(() => {
		const checkAuthCookie = async () => {
			const res = await signInWithCookie();
			if (res.ok) {
				signInUser(res);
			} else {
				deleteCookie('jwt');
			}
		};
		checkAuthCookie();
	}, []);
	return <>{props.children}</>;
};

export default FirstRunApp;
