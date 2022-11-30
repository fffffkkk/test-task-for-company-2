import React, { FC } from 'react';

import { optionsData } from '@/data/options';

interface SelectProps {
	change: (value: string) => void;
}

const Select: FC<SelectProps> = ({ change }) => {
	return (
		<select
			onChange={(e) => change(e.target.value)}
			className='cursor-pointer p-1 rounded-lg border border-sky-400'
		>
			{optionsData.map((option) => (
				<option key={option} value={option}>
					{option}
				</option>
			))}
		</select>
	);
};
export default Select;
