import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
	filterCountriesRegion,
	filterCountriesSpecific,
	changeText,
} from '../redux/actions.js'
import {
	Container,
	InputAdornment,
	TextField,
	Input,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
} from '@mui/material/'
import SearchIcon from '@mui/icons-material/Search'

const SearchCountry = ({
	filterCountriesSpecific,
	filterCountriesRegion,
	countries,
	changeText,
	textToSearch,
}) => {
	const [region, setRegion] = useState('Europe')
	const handleChangeCountry = event => {
		changeText(event.target.value)
		filterCountriesSpecific(event.target.value, countries)
	}
	const handleChangeRegion = event => {
		setRegion(event.target.value)
		filterCountriesRegion(event.target.value.toLowerCase())
	}
	return (
		<Container
			maxWidth='lg'
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				flexWrap: 'wrap',
			}}
		>
			<TextField
				variant='outlined'
				id='search-country'
				sx={{ m: 1, width: '400px', margin: '50px 0', marginRight: '20px' }}
				placeholder='Search for a country...'
				value={textToSearch}
				onChange={handleChangeCountry}
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<SearchIcon />
						</InputAdornment>
					),
				}}
			/>
			<FormControl sx={{ width: '250px' }}>
				<InputLabel id='region-simple-select-label'>
					Filter by Region
				</InputLabel>
				<Select
					labelId='region-simple-select-label'
					id='simple-select-region'
					value={region}
					label='Filter by Region'
					onChange={handleChangeRegion}
				>
					<MenuItem value={'Africa'}>Africa</MenuItem>
					<MenuItem value={'Americas'}>Americas</MenuItem>
					<MenuItem value={'Asia'}>Asia</MenuItem>
					<MenuItem value={'Europe'}>Europe</MenuItem>
					<MenuItem value={'Oceania'}>Oceania</MenuItem>
					<MenuItem value={'All'}>All</MenuItem>

				</Select>
			</FormControl>
		</Container>
	)
}

const mapStateToProps = state => {
	return {
		countries: state.selectCurrentCountries,
		textToSearch: state.textToFilter,
	}
}

const mapDispatchToProps = {
	filterCountriesRegion,
	filterCountriesSpecific,
	changeText,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCountry)
