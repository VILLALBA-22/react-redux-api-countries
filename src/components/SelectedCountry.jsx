import React, { useEffect, useState } from 'react'
import AppBar from './AppBar.jsx'
import { connect } from 'react-redux'
import { selectCountry } from '../redux/actions.js'
import { useHistory, useParams } from 'react-router-dom'
import { Container, Button, Typography, Box } from '@mui/material/'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import './style.css'
const axios = require('axios').default

const SelectedCountry = ({ selectCountry, country }) => {
	const history = useHistory()
	const params = useParams()
	const currentCountry = params.country
	const [borders, setBorders] = useState([])
	useEffect(() => {
		axios
			.get(
				`https://restcountries.com/v3/name/${currentCountry}?fields=name,population,flags,tld,currencies,languages,borders,region,subregion,capital,`
			)
			.then(res => selectCountry(res.data[0]))
	}, [])
	useEffect(() => {
		if (country.borders !== undefined) {
			let toBorders = []
			country.borders.forEach(border => {
				axios
					.get(`https://restcountries.com/v2/alpha?codes=${border}`)
					.then(res => toBorders.push(res.data[0].name))
					.then(() => {
						if (toBorders.length === country.borders.length) {
							setBorders(toBorders)
						}
					})
			})
		}
	}, [country])
	return (
		<>
			<AppBar />
			{country.region === undefined ? null : (
				<Container maxWidth='lg' className='container-individual-country'>
					<Button
						variant='contained'
						sx={{ padding: '5px 20px' }}
						onClick={() => history.push('/')}
					>
						<KeyboardBackspaceIcon sx={{ marginRight: '10px' }} />
						<Typography
							sx={{
								typography: 'body2',
								textTransform: 'none',
							}}
							className='btn-p-ip'
						>
							Back
						</Typography>
					</Button>
					<Box className='box-individual-country'>
						<Box
							className='img-individual-ip'
							sx={{
								backgroundImage: `url("${country.flags[1]}")`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
								boxShadow: 3,
							}}
						></Box>
						<Box className='info-individual-ip'>
							<Typography variant='h2' className='title-individual-ip'>
								{country.name.common}
							</Typography>
							<Box className='info-container-individual-ip'>
								<Box className='info-ul-1'>
									<Typography
										variant='subtitle2'
										sx={{
											display: 'inline',
											fontWeight: 'bold',
											opacity: '0.9',
										}}
										className='info-ul-p'
									>
										Native Name:{' '}
									</Typography>
									<Typography
										sx={{ display: 'inline', opacity: '0.7' }}
										variant='body2'
										className='info-ul-p'
									>
										{
											country.name.nativeName[Object.keys(country.languages)[0]]
												.common
										}
									</Typography>
									<br />
									<Typography
										variant='subtitle2'
										sx={{
											display: 'inline',
											fontWeight: 'bold',
											opacity: '0.9',
										}}
										className='info-ul-p'
									>
										Population:{' '}
									</Typography>
									<Typography
										sx={{ display: 'inline', opacity: '0.7' }}
										variant='body2'
										className='info-ul-p'
									>
										{country.population}
									</Typography>
									<br />
									<Typography
										variant='subtitle2'
										sx={{
											display: 'inline',
											fontWeight: 'bold',
											opacity: '0.9',
										}}
										className='info-ul-p'
									>
										Region:{' '}
									</Typography>
									<Typography
										sx={{ display: 'inline', opacity: '0.7' }}
										variant='body2'
										className='info-ul-p'
									>
										{country.region}
									</Typography>
									<br />
									<Typography
										variant='subtitle2'
										sx={{
											display: 'inline',
											fontWeight: 'bold',
											opacity: '0.9',
										}}
										className='info-ul-p'
									>
										Sub region:{' '}
									</Typography>
									<Typography
										sx={{ display: 'inline', opacity: '0.7' }}
										variant='body2'
										className='info-ul-p'
									>
										{country.subregion}
									</Typography>
									<br />
									<Typography
										variant='subtitle2'
										sx={{
											display: 'inline',
											fontWeight: 'bold',
											opacity: '0.9',
										}}
										className='info-ul-p'
									>
										Capital:{' '}
									</Typography>
									<Typography
										sx={{ display: 'inline', opacity: '0.7' }}
										variant='body2'
										className='info-ul-p'
									>
										{country.capital[0]}
									</Typography>
								</Box>
								<Box className='info-ul-2'>
									<Typography
										variant='subtitle2'
										sx={{
											display: 'inline',
											fontWeight: 'bold',
											opacity: '0.9',
										}}
										className='info-ul-p'
									>
										Top Level Domain:{' '}
									</Typography>
									<Typography
										sx={{ display: 'inline', opacity: '0.7' }}
										variant='body2'
										className='info-ul-p'
									>
										{country.tld[0]}
									</Typography>
									<br />
									<Typography
										variant='subtitle2'
										sx={{
											display: 'inline',
											fontWeight: 'bold',
											opacity: '0.9',
										}}
										className='info-ul-p'
									>
										Currencies:{' '}
									</Typography>
									<Typography
										sx={{ display: 'inline', opacity: '0.7' }}
										variant='body2'
										className='info-ul-p'
									>
										{
											country.currencies[Object.keys(country.currencies)[0]]
												.name
										}
									</Typography>
									<br />
									<Typography
										variant='subtitle2'
										sx={{
											display: 'inline',
											fontWeight: 'bold',
											opacity: '0.9',
										}}
										className='info-ul-p'
									>
										Languages:{' '}
									</Typography>
									<Typography
										sx={{ display: 'inline', opacity: '0.7' }}
										variant='body2'
										className='info-ul-p'
									>
										{country.languages[Object.keys(country.languages)[0]]}
									</Typography>
								</Box>
								<Box className='border-countries'>
									<Typography
										variant='subtitle2'
										sx={{
											display: 'inline',
											fontWeight: 'bold',
											opacity: '0.9',
										}}
										className='info-ul-p'
									>
										Border Countries:{' '}
									</Typography>
									<Box className='info-ul-p'>
										{country.borders.length === 0 ? (
											<Button
												sx={{ marginRigth: '5px' }}
												variant='contained'
												className='btn-border'
											>
												No countries
											</Button>
										) : null}

										{borders.map(border => {
											return (
												<Button
													sx={{ marginRigth: '5px' }}
													variant='contained'
													className='btn-border'
													href={`/${border}`}
													key={border}
												>
													{border}
												</Button>
											)
										})}
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				</Container>
			)}
		</>
	)
}

const mapDispatchToProps = {
	selectCountry,
}

const mapStateToProps = state => {
	return {
		country: state.currentCountry,
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedCountry)
