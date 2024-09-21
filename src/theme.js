import {createTheme} from "@mui/material"

export const theme = createTheme({
	palette: {
		mode: 'dark', // Темна тема
		primary: {
			main: '#90caf9', // Колір основної теми (необов'язково)
		},
		secondary: {
			main: '#f48fb1', // Колір вторинної теми (необов'язково)
		},
	},
})