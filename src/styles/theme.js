import { purple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	status: {
		danger: "#e53e3e",
	},
	palette: {
		primary: {
			// Purple and green play nicely together.
			main: purple[500],
		},
		secondary: {
			// This is green.A700 as hex.
			main: "#11cb5f",
		},
		neutral: {
			main: "#64748B",
			contrastText: "#fff",
		},
	},
});

export default theme;
