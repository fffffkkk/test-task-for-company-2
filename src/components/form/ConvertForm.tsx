import { useFetching } from '@/hooks/useFetch';
import { currencyService } from '@/services/currencyService';
import React, { FC, useState } from 'react';
import Input from '../ui/Input';

interface ConvertFormProps {
	changeConvert: (value: string) => void;
}

const ConvertForm: FC<ConvertFormProps> = ({ changeConvert }) => {
	const [input, setInput] = useState('');
	const [fetchConvert, isLoading, isError] = useFetching(
		async (data: { from: string; to: string; amount: number }) => {
			const response = await currencyService.getConvert(
				data.from,
				data.to,
				data.amount
			);
			changeConvert(response.data.result);
		}
	);

	const handleChangeInput = (value: string) => {
		setInput(value);
	};
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!input) return;

		const data = {
			from: input.split(' ')[1].toUpperCase(),
			to: input.split(' ')[3].toUpperCase(),
			amount: input.split(' ')[0],
		};

		fetchConvert(data);
	};

	return (
		<form onClick={handleSubmit}>
			<Input type='text' text='Введите валюту...' change={handleChangeInput} />
			<button className='ml-5 border-2 p-1 rounded-lg border-sky-400'>
				Получить
			</button>
		</form>
	);
};
export default ConvertForm;
