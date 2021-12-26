import React from 'react';
import { useParams } from 'react-router-dom';
import ContentSearchTemplate from '../../components/ContentSearchTemplate';

const Recepies = () => {
	const params = useParams();

	return (
		<>
			<ContentSearchTemplate
				leftElem={<div>left</div>}
				rightElem={<div>right</div>}
				selectedPage={'Recepies'}
			/>

			{params.id ? <div>params {params.id}</div> : null}
		</>
	);
};

export default Recepies;
