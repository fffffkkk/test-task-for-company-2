import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as LogoImg } from '@/assets/images/logo.svg';
import { routes } from '@/data/routes';

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
	return (
		<div className='bg-sky-400 w-full min-h-[50px] rounded-b-xl px-5'>
			<div className='flex items-center justify-between'>
				<LogoImg />
				<div className='flex gap-5'>
					{routes.map((route) => (
						<Link
							to={route.path}
							key={route.path}
							className='block hover:font-bold transition-all'
						>
							<h1 className='text-xl'>{route.name}</h1>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};
export default Navbar;
