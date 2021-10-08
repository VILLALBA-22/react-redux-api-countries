import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material/'

export default function ButtonAppBar() {
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
					>
						Dark Mode
					</Button>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
