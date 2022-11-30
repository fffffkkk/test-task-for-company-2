import React, { FC } from 'react';

interface LayoutCurrencyProps {
	children: React.ReactNode;
}

const LayoutCurrency: FC<LayoutCurrencyProps> = ({ children }) => {
	return <div className='grid grid-cols-3 text-center'>{children}</div>;
};
export default LayoutCurrency;
