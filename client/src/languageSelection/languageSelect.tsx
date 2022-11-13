import { Box } from "@mui/material"
import styled from "styled-components";
import SelectBox from "../select/select";
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';

const LanguageSelection = () => {
    return (
        <StyledBox>
            <SelectBox fromOrTo={'from'}></SelectBox>
            <SwapHorizontalCircleIcon style={{ paddingLeft: '60px', paddingRight: '60px', color: 'white', fontSize: '50px' }}></SwapHorizontalCircleIcon>
            <SelectBox fromOrTo={'to'}></SelectBox>
        </StyledBox>
    )
}

export default LanguageSelection;

const StyledBox = styled(Box)`
    margin-top: 50px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #8467D7;
    border-radius: 15px;
    height: 80px;
`