import React, { FC, useEffect, useState } from 'react';

import { useFetching } from '@/hooks/useFetch';
import { currencyService } from '@/services/currencyService';

interface SelectProps {
	change: (value: string) => void;
}

const Select: FC<SelectProps> = ({ change }) => {
	const [data, setData] = useState({ symbols: {} });
	const [fetchingOptions] = useFetching(async () => {
		const response = await currencyService.getAllSymbolsCurrency();
		setData(response.data);
	});

	useEffect(() => {
		fetchingOptions();
	}, []);

	return (
		<select
			onChange={(e) => change(e.target.value)}
			className='cursor-pointer p-1 rounded-lg border border-sky-400'
		>
			{data && (
				<>
					{Object.entries(data.symbols).map((option) => (
						<option key={option[0]} value={option[0]}>
							{option[0]}
						</option>
					))}
				</>
			)}
		</select>
	);
};
export default Select;
