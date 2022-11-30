import Converter from '@/pages/Converter/Converter';
import Home from '@/pages/Home/Home';

export const routes = [
	{ path: '/', element: Home, name: 'home' },
	{ path: '/convert', element: Converter, name: 'convert' },
];
