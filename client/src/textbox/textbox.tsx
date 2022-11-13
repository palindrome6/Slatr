import { Box, TextField } from "@mui/material";
import styled from "styled-components";

const TextBox = () => {
    return (
        // <StyledBox>
        <StyledTextField id="outlined-basic" multiline={true}
            rows={10} />
        // </StyledBox>
    )
}

export default TextBox;

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
`
const StyledTextField = styled(TextField)`
    border-radius: 40px;
    width: 500px;
`