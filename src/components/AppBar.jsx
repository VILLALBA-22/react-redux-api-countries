import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material/'
import { connect } from 'react-redux'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { changeTheme } from '../redux/actions'

function HeaderAppBar({ myTheme, changeTheme }) {
	const handleClickTheme = () => {
		let nextTheme = 'dark'
		if (myTheme === 'dark') {
			nextTheme = 'light'
		}
		changeTheme(nextTheme)
	}
	return (
		<AppBar position='static'>
			<Container maxWidth='lg'>
				<Toolbar disableGutters>
					<Typography
						variant='h1'
						sx={{ flexGrow: 1, fontSize: '20px', fontWeight: 'bold' }}
						id='title-toolbar'
					>
						Where in the world?
					</Typography>
					<Button
						color='inherit'
						sx={{ textTransform: 'none', fontWeight: 700 }}
						id='theme-toolbar'
						onClick={handleClickTheme}
					>
						{myTheme === 'light' ? (
							<Brightness4Icon
								sx={{ marginRight: '10px', marginTop: '-3px' }}
							/>
						) : (
							<Brightness7Icon
								sx={{ marginRight: '10px', marginTop: '-3px' }}
							/>
						)}
						{myTheme} mode
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	)
}

const mapStateToProps = state => {
	return {
		myTheme: state.setTheme,
	}
}

const mapDispatchToProps = {
	changeTheme,
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAppBar)
