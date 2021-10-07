import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { currentCountries } from '../redux/actions'

const Test = ({ currentCountries, contries }) => {
	useEffect(() => {
		currentCountries(
			'https://restcountries.com/v3/all?fields=name,population,flags,region,capital'
		)
	}, [])
	return (
		<div>
			{contries.map(e => {
				return (
					<>
						<img src={e.flags[1]} />
						<p>
							{e.name.common} {e.population}
						</p>
					</>
				)
			})}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		contries: state.selectCurrentCountries,
	}
}

const mapDispatchToProps = {
	currentCountries,
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
