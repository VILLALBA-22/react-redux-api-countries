import { combineReducers } from 'redux'
import {
	CURRENT_COUNTRIES,
	FILTER_COUNTRIES_REGION,
	FILTER_COUNTRIES_SPECIFIC,
	SELECT_COUNTRY,
	CHANGE_THEME,
	DEFAULT_COUNTRIES_SPECIFIC,
	CHANGE_TEXT,
} from './actions'

function selectCurrentCountries(state = [], { type, payload }) {
	switch (type) {
		case CURRENT_COUNTRIES:
			return payload
		case FILTER_COUNTRIES_REGION:
			return payload
		default:
			return state
	}
}

function filterCountriesSpecific(state = [], { type, payload }) {
	switch (type) {
		case FILTER_COUNTRIES_SPECIFIC:
			let regex = new RegExp(`^${payload.text}`, 'gim')
			let filterCountries = payload.countries.filter(c =>
				regex.test(c.name.common)
			)
			return filterCountries
		case DEFAULT_COUNTRIES_SPECIFIC:
			return []
		default:
			return state
	}
}

function currentCountry(state = {}, { type, payload }) {
	switch (type) {
		case SELECT_COUNTRY:
			return payload
		default:
			return state
	}
}

function setTheme(
	state = localStorage.getItem('theme') || 'light',
	{ type, payload }
) {
	switch (type) {
		case CHANGE_THEME:
			localStorage.setItem('theme', payload)
			return payload
		default:
			return state
	}
}

function textToFilter(state = '', { type, payload }) {
	switch (type) {
		case CHANGE_TEXT:
			return payload
		default:
			return state
	}
}

const rootReducer = combineReducers({
	selectCurrentCountries,
	filterCountriesSpecific,
	currentCountry,
	setTheme,
	textToFilter,
})

export default rootReducer
