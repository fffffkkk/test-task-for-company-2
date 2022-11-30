import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from '@/data/routes';

interface AppRouterProps {}

const AppRouter: FC<AppRouterProps> = ({}) => {
	return (
		<Routes>
			{routes.map((route) => (
				<Route path={route.path} element={<route.element />} key={route.path} />
			))}
		</Routes>
	);
};
export default AppRouter;
