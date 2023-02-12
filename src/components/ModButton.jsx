import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const ModButton = styled(Button)(({ theme }) => ({
	lineHeight: 0,
    paddingBlock: "15px"
}));

export default ModButton;
