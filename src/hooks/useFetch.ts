import { useState } from 'react';

type FIX_ME = any | any[];

export const useFetching = (callback: FIX_ME) => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(false);

	const fetching = async (...args: FIX_ME) => {
		try {
			setIsLoading(true);
			await callback(...args);
		} catch (error) {
			setError(true);
		} finally {
			setIsLoading(false);
		}
	};

	return [fetching, isLoading, error] as const;
};
