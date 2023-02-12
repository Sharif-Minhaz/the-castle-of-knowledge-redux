import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			main: "#0ab3a3",
		},
		secondary: {
			// This is green.A700 as hex.
			main: "#11cb5f",
		},
		neutral: {
			main: "#64748B",
			contrastText: "#fff",
		},
	}
});

export default theme;
