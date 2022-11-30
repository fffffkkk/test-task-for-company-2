import React, { FC } from 'react';

interface SpinnerProps {}

const Spinner: FC<SpinnerProps> = ({}) => {
	return <div className='font-bold text-red-500'>Loading...</div>;
};
export default Spinner;
