import React from 'react';

const SvgArrow = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="24"
			height="44"
			viewBox="0 0 24 44"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M0.585786 43.4142C-0.195262 42.6332 -0.195262 41.3668 0.585786 40.5858L19.1716 22L0.585786 3.41421C-0.195262 2.63316 -0.195262 1.36683 0.585786 0.585785C1.36684 -0.195263 2.63317 -0.195263 3.41421 0.585785L23.4142 20.5858C24.1953 21.3668 24.1953 22.6332 23.4142 23.4142L3.41421 43.4142C2.63317 44.1953 1.36684 44.1953 0.585786 43.4142Z"
				fill={props.fill ? props.fill : '#FFFFFF'}
			/>
		</svg>
	);
};

export default SvgArrow;
