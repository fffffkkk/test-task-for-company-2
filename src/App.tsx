import React, { FC } from 'react';

import AppRouter from '@/components/AppRouter';
import Navbar from '@/components/Navbar';
import LayoutMain from '@/layouts/LayoutMain';

interface AppProps {}

const App: FC<AppProps> = ({}) => {
	return (
		<LayoutMain>
			<Navbar />
			<AppRouter />
		</LayoutMain>
	);
};

export default App;
