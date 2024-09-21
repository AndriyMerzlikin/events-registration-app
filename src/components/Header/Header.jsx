import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';



const Header = () => {
	return (
		<AppBar position="fixed" sx={{  boxShadow: 'none', width: '100vw' }}>
			<Toolbar sx={{ minHeight: '64px', justifyContent: 'center' , gap: '25px'}}>
				<IconButton
					component={Link} // Зробимо іконку посиланням
					to="/" // Перехід на головну сторінку
					color="inherit" // Колір для темної теми
					edge="start"
				>
					<HomeIcon />
				</IconButton>
				<Typography variant="h6" component="div">
					My Events App
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Header;