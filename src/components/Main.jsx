import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { currentCountries } from '../redux/actions'
import { Button } from '@mui/material'
import AppBar from './AppBar.jsx'
import SearchCountry from './SearchCountry.jsx'
import CurrentCountries from './CurrentCountries.jsx'

const Main = ({ currentCountries, countries }) => {
	useEffect(() => {
		currentCountries(
			'https://restcountries.com/v3/region/europe?fields=name,population,flags,region,capital'
		)
	}, [])
	return (
		<div>
			<AppBar />
			<SearchCountry />
			<CurrentCountries countries={countries} />
		</div>
	)
}

const mapStateToProps = state => {
	return {
		countries: state.selectCurrentCountries,
	}
}

const mapDispatchToProps = {
	currentCountries,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
