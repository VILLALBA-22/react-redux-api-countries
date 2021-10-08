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
		const countries = await axios.get(
			`https://restcountries.com/v3/region/${region}?fields=name,population,flags,region,capital`
		)
		console.log(countries)
		dispatch({
			type: FILTER_COUNTRIES_REGION,
			payload: countries.data,
		})
	}
}

export const FILTER_COUNTRIES_SPECIFIC = 'FILTER_COUNTRIES_SPECIFIC'
export function filterCountriesSpecific(text) {
	return {
		type: FILTER_COUNTRIES_SPECIFIC,
		payload: text,
	}
}

export const SELECT_COUNTRY = 'SELECT_COUNTRY'
export function selectCountry(text) {
	return {
		type: SELECT_COUNTRY,
		payload: text,
	}
}

export const CHANGE_THEME = 'CHANGE_THEME'
export function changeTheme(theme) {
	return {
		type: CHANGE_THEME,
		payload: theme,
	}
}
