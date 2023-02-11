import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import theme from "../styles/theme";
import "./App.css";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div className="App">
				<Button variant="text">Text</Button>
				<Button variant="contained">Contained</Button>
				<Button color="neutral" variant="outlined">Outlined</Button>
			</div>
		</ThemeProvider>
	);
}

export default App;
