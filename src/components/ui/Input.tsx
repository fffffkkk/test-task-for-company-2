import React, { FC } from 'react';

type inputType = 'text';

interface InputProps {
	type: inputType;
	text: string;
	change: (value: string) => void;
}

const Input: FC<InputProps> = ({ type, text, change }) => {
	return (
		<label className=''>
			<div className=''>{text}</div>
			<input
				type={type}
				onChange={(e) => change(e.target.value)}
				className='border border-sky-400 rounded-lg p-1'
			/>
		</label>
	);
};
export default Input;
