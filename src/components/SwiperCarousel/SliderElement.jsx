import { Box, Button, Stack, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

const SliderElement = ({ data, alignment }) => {
	return (
		<Box
			sx={{
				backgroundImage: `url(${data.img})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
				height: "calc(100vh - 150px)",
				minHeight: "470px",
				borderRadius: "10px",
				cursor: "grab",
				"&:active": {
					cursor: "grabbing"
				}
			}}
		>
			<Stack
				alignItems={alignment}
				justifyContent="center"
				px="65px"
				sx={{ background: "#0ab3a32e", height: "100%", borderRadius: "10px" }}
			>
				<Typography className="heading-lines" mb="10px" variant="body1" color="whitesmoke">
					{data.smHeading}
				</Typography>
				<Typography mb="8px" variant="h3" color="white">
					{data.heading}
				</Typography>
				<Typography mb="16px" variant="body2" color="white">
					{data.description}
				</Typography>
				<Button
					sx={{ color: "white", width: 130, borderRadius: "20px", py: "8px" }}
					variant="contained"
					endIcon={<ShoppingCartCheckoutIcon />}
				>
					Buy Now
				</Button>
			</Stack>
		</Box>
	);
};

export default SliderElement;
