import React from 'react'
import { connect } from 'react-redux'
import { CssBaseline } from '@mui/material/'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Main from './components/Main.jsx'
import SelectedCountry from './components/SelectedCountry.jsx'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const App = ({ myTheme }) => {
	const theme = createTheme({
		palette: {
			mode: myTheme,
			primary: {
				main: '#F9F9F9',
			},
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<CssBaseline />
				<Switch>
					<Route path='/:country' component={SelectedCountry} />
					<Route path='/' component={Main} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	)
}

const mapStateToProps = state => {
	return {
		myTheme: state.setTheme,
	}
}

export default connect(mapStateToProps)(App)
