import React, { FC } from 'react';

interface LayoutMainProps {
	children: React.ReactNode;
}

const LayoutMain: FC<LayoutMainProps> = ({ children }) => {
	return <div className='max-w-[1400px] mx-auto px-5'>{children}</div>;
};
export default LayoutMain;
