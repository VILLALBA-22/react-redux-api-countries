import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Test from './components/Test'

const Main = () => {
	return (
		<Provider store={store}>
			<Test />
		</Provider>
	)
}

ReactDOM.render(<Main />, document.getElementById('root'))
