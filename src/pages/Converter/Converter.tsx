import ConvertForm from '@/components/form/ConvertForm';
import React, { FC, useState } from 'react';

interface ConverterProps {}

const Converter: FC<ConverterProps> = ({}) => {
	const [convertCurrency, setConvertCurrency] = useState('');

	const handleChangeConvertCurrency = (value: string) => {
		setConvertCurrency(value);
	};

	return (
		<div className='px-5 mt-10'>
			<ConvertForm changeConvert={handleChangeConvertCurrency} />
			{convertCurrency && (
				<h1 className='font-bold text-green-500 mt-5'>{convertCurrency}</h1>
			)}
		</div>
	);
};
export default Converter;
