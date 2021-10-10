const axios = require('axios').default

export const CURRENT_COUNTRIES = 'CURRENT_COUNTRIES'
export function currentCountries(url) {
	return async dispatch => {
		const countries = await axios.get(url)
		dispatch({
			type: CURRENT_COUNTRIES,
			payload: countries.data,
		})
	}
}

export const FILTER_COUNTRIES_REGION = 'FILTER_COUNTRIES_REGION'
export function filterCountriesRegion(region) {
	return async dispatch => {
		let url = `https://restcountries.com/v3/region/${region}?fields=name,population,flags,region,capital`
		if (region === 'all') {
			url = `https://restcountries.com/v3/all?fields=name,population,flags,region,capital`
		}
		const countries = await axios.get(url)
		dispatch({
			type: FILTER_COUNTRIES_REGION,
			payload: countries.data,
		})
	}
}

export const FILTER_COUNTRIES_SPECIFIC = 'FILTER_COUNTRIES_SPECIFIC'
export function filterCountriesSpecific(text, countries) {
	return {
		type: FILTER_COUNTRIES_SPECIFIC,
		payload: { text, countries },
	}
}

export const DEFAULT_COUNTRIES_SPECIFIC = 'DEFAULT_COUNTRIES_SPECIFIC'
export function defaultCountriesSpecific() {
	return {
		type: DEFAULT_COUNTRIES_SPECIFIC,
		payload: '',
	}
}

export const SELECT_COUNTRY = 'SELECT_COUNTRY'
export function selectCountry(country) {
	return {
		type: SELECT_COUNTRY,
		payload: country,
	}
}

export const CHANGE_THEME = 'CHANGE_THEME'
export function changeTheme(theme) {
	return {
		type: CHANGE_THEME,
		payload: theme,
	}
}

export const CHANGE_TEXT = 'CHANGE_TEXT'
export function changeText(text) {
	console.log(text)
	return {
		type: CHANGE_TEXT,
		payload: text,
	}
}
