import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Brand = ({ xs, md }) => {
	return (
		<Box sx={{ display: { xs, md } }}>
			<Link
				to="/"
				style={{
					display: "flex",
					textDecoration: "none",
					alignItems: "center",
					color: "inherit",
				}}
			>
				<img
					src="/images/castle-icon.png"
					alt="castle"
					style={{ lineHeight: 0, width: 45, height: 45, marginRight: 10 }}
				/>
				<Typography
					variant="h6"
					noWrap
					sx={{
						mr: 3,
						display: { xs, md },
						fontFamily: "monospace",
						fontWeight: 700,
                        color: "inherit",
						textDecoration: "none",
					}}
				>
					TCK
				</Typography>
			</Link>
		</Box>
	);
};

export default Brand;
