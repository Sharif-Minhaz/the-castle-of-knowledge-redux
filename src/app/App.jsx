import { ThemeProvider } from "@mui/system";
import theme from "../theme/theme";
import "./App.css";
import Navbar from "../components/Navbar";
import { Container } from "@mui/material";
import SwiperCarousel from "../components/SwiperCarousel/SwiperCarousel";

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
			<Container maxWidth="lg" sx={{mt: 3}}>
				<SwiperCarousel />
			</Container>
		</ThemeProvider>
	);
}

export default App;
