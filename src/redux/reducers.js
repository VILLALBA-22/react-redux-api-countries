import { combineReducers } from 'redux'
import {
	CURRENT_COUNTRIES,
	FILTER_COUNTRIES_REGION,
	FILTER_COUNTRIES_SPECIFIC,
	SELECT_COUNTRY,
	CHANGE_THEME,
} from './actions'

//Logica pendiente en TODO

function selectCurrentCountries(state = [], { type, payload }) {
	switch (type) {
		case CURRENT_COUNTRIES:
			return payload
		default:
			return state
	}
}

function filterCountries(state = {}, { type, payload }) {
	switch (type) {
		case FILTER_COUNTRIES_REGION:
			return {}
		case FILTER_COUNTRIES_SPECIFIC:
			return {}
		default:
			return state
	}
}

function setCurrentCountry(state = {}, { type, payload }) {
	switch (type) {
		case SELECT_COUNTRY:
			return {}
		default:
			return state
	}
}

function setTheme(state = '', { type, payload }) {
	switch (type) {
		case CHANGE_THEME:
			return {}
		default:
			return state
	}
}

const rootReducer = combineReducers({
	selectCurrentCountries,
	filterCountries,
	setCurrentCountry,
	setTheme,
})

export default rootReducer
