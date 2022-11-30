import axios from 'axios';

axios.defaults.baseURL =
	'https://currency-conversion-and-exchange-rates.p.rapidapi.com/';

export const getFetch = (url: string, params: {}) => {
	return axios({
		url: url,
		method: 'GET',
		params: params,
		headers: {
			'X-RapidAPI-Key': import.meta.env.VITE_APP_API_KEY,
			'X-RapidAPI-Host': import.meta.env.VITE_APP_API_HOST,
		},
	});
};
