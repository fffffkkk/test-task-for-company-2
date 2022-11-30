import React, { FC, useEffect, useState } from 'react';

import { currencyService } from '@/services/currencyService';
import { useFetching } from '@/hooks/useFetch';
import { ICurrencyData } from './model/ICurrency';
import Spinner from './ui/Spinner';
import CurrencyItem from './CurrencyItem';
import LayoutCurrency from '@/layouts/LayoutCurrency';

interface CurrencyListProps {
	defaultCurrency: string;
}

const CurrencyList: FC<CurrencyListProps> = ({ defaultCurrency }) => {
	const [data, setData] = useState<ICurrencyData>();
	const [fetchCurrency, isLoading, isError] = useFetching(async () => {
		const response = await currencyService.getAllCurrency(defaultCurrency);
		setData({ ...response.data });
	});

	useEffect(() => {
		fetchCurrency();
	}, [defaultCurrency]);

	if (isLoading) {
		return <Spinner />;
	}

	return (
		<div>
			{data && (
				<LayoutCurrency>
					{Object.entries(data.rates).map((items) => (
						<CurrencyItem key={items[0]} data={items} />
					))}
				</LayoutCurrency>
			)}
		</div>
	);
};
export default CurrencyList;
