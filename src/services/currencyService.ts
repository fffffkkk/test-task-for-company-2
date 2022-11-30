import { getFetch } from '@/lib/fetch';

export const currencyService = {
	async getAllCurrency(currency: string) {
		return getFetch('latest', { base: currency, amount: 1 });
	},
	getConvert(from: string, to: string, amount: number) {
		return getFetch('convert', { from: from, to: to, amount: amount });
	},
};
