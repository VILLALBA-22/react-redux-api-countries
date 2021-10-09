import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import store from './redux/store'
import Main from './components/Main.jsx'
import SelectedCountry from './components/SelectedCountry.jsx'

const Root = () => {
	return (
		<Provider store={store}>
			<BrowserRouter>
				<CssBaseline />
				<Switch>
					<Route path='/:country' component={SelectedCountry} />
					<Route path='/' component={Main} />
				</Switch>
			</BrowserRouter>
		</Provider>
	)
}

ReactDOM.render(<Root />, document.getElementById('root'))
