import React from 'react';
import { useParams } from 'react-router-dom';
import ContentSearchTemplate from '../../components/ContentSearchTemplate';

const Cookbooks = () => {
	const params = useParams();

	return (
		<>
			<ContentSearchTemplate
				leftElem={<div>left</div>}
				rightElem={<div>right</div>}
				selectedPage={'Cookbooks'}
			/>

			{params.id ? <div>params {params.id}</div> : null}
		</>
	);
};

export default Cookbooks;
