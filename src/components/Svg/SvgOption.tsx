import React from 'react';

const SvgOption = (props: React.SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="20"
			height="4"
			viewBox="0 0 20 4"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<circle
				cx="2"
				cy="2"
				r="2"
				fill={props.fill ? props.fill : '#DADADA'}
			/>
			<circle
				cx="10"
				cy="2"
				r="2"
				fill={props.fill ? props.fill : '#DADADA'}
			/>
			<circle
				cx="18"
				cy="2"
				r="2"
				fill={props.fill ? props.fill : '#DADADA'}
			/>
		</svg>
	);
};

export default SvgOption;
