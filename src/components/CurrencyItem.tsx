import React, { FC } from 'react';

interface CurrencyItemProps {
	data: [string, any];
}

const CurrencyItem: FC<CurrencyItemProps> = ({ data }) => {
	return (
		<div className='inline-block'>
			<span className='font-bold text-red-500'>{data[0]}</span>
			<span className='font-bold'> - </span>
			<span className='font-bold text-green-500'>{data[1]}</span>
		</div>
	);
};

export default CurrencyItem;
