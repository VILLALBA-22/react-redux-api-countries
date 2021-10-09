import React, { useEffect } from 'react'
import {
	Container,
	Button,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Grid,
	Box,
	Link,
	useMediaQuery,
} from '@mui/material/'
import { connect } from 'react-redux'
import './style.css'
import { defaultCountriesSpecific, changeText } from '../redux/actions'

function CurrentCountries({
	countries,
	filterCountries,
	defaultCountriesSpecific,
	changeText,
}) {
	useEffect(() => {
		defaultCountriesSpecific()
		changeText('')
	}, [countries])
	let countriesToShow = []
	filterCountries.length === 0
		? (countriesToShow = countries.slice(0, 8))
		: (countriesToShow = filterCountries.slice(0, 8))
	return (
		<Container>
			<Grid container spacing={8} id='countries'>
				{countriesToShow.map((e, p) => {
					return (
						<Grid item xs={12} sm={6} md={4} lg={3}>
							<Link
								href={`/${e.name.common}`}
								underline='none'
								key={e.name.common}
							>
								<Card>
									<CardMedia
										component='img'
										image={e.flags[1]}
										alt={`${e.name.common} flag`}
										height='170px'
										className='country-flag'
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant='h3'
											sx={{ fontWeight: 'bold', fontSize: '19px' }}
										>
											{e.name.common}
										</Typography>
										<Box>
											<Typography
												variant='subtitle2'
												sx={{
													display: 'inline',
													fontWeight: 'bold',
													opacity: '0.9',
												}}
											>
												Population:{' '}
											</Typography>
											<Typography
												sx={{ display: 'inline', opacity: '0.7' }}
												variant='body2'
											>
												{e.population}
											</Typography>
										</Box>
										<Box>
											<Typography
												variant='subtitle2'
												sx={{
													display: 'inline',
													fontWeight: 'bold',
													opacity: '0.9',
												}}
											>
												Region:{' '}
											</Typography>
											<Typography
												sx={{ display: 'inline', opacity: '0.7' }}
												variant='body2'
											>
												{e.region}
											</Typography>
										</Box>
										<Box>
											<Typography
												variant='subtitle2'
												sx={{
													display: 'inline',
													fontWeight: 'bold',
													opacity: '0.9',
												}}
											>
												Capital:{' '}
											</Typography>
											<Typography
												sx={{ display: 'inline', opacity: '0.7' }}
												variant='body2'
											>
												{e.capital[0]}
											</Typography>
										</Box>
									</CardContent>
								</Card>
							</Link>
						</Grid>
					)
				})}
			</Grid>
		</Container>
	)
}

const mapDispatchToProps = {
	defaultCountriesSpecific,
	changeText,
}

export default connect(null, mapDispatchToProps)(CurrentCountries)
