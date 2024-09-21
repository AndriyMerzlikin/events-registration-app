import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme.js";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<ThemeProvider theme={theme}>
			<BrowserRouter>
<Toaster/>
				<App/>
			</BrowserRouter>
		</ThemeProvider>
	</StrictMode>,
)
