import React, { FC, useState } from 'react';
import Select from '@/components/ui/Select';
import CurrencyList from '@/components/CurrencyList';

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
	const [currency, setCurrency] = useState('RUB');

	const handleChangeCurrency = (value: string) => {
		setCurrency(value);
	};

	return (
		<div className='px-5 mt-10'>
			<div className='flex gap-2 items-center'>
				<h3>Текущая валюта: </h3>
				<Select change={handleChangeCurrency} />
			</div>
			<div className='mt-5'>
				<CurrencyList defaultCurrency={currency} />
			</div>
		</div>
	);
};
export default Home;
