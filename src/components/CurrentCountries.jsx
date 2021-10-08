import React from 'react'
import {
	Container,
	Button,
	Card,
	CardMedia,
	CardContent,
	Typography,
	Grid,
	Box,
	useMediaQuery,
} from '@mui/material/'
import { useTheme } from '@mui/material/styles'
import './style.css'

export default function CurrentCountries({ countries }) {
	const theme = useTheme()
	const countriesToShow = countries.slice(0, 8)
	return (
		<Container>
			<Grid container spacing={8} id='countries'>
				{countriesToShow.map((e, p) => {
					return (
						<Grid item xs={12} sm={6} md={4} lg={3}>
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
						</Grid>
					)
				})}
			</Grid>
		</Container>
	)
}
