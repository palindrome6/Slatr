import { Box } from "@mui/material"
import styled from "styled-components";
import SelectBox from "../select/select";
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import React from "react";

const LanguageSelection = () => {
    return (
        <StyledBox>
            <SelectBox></SelectBox>
            <SwapHorizontalCircleIcon style={{ paddingLeft: '60px', paddingRight: '60px', color: 'white', fontSize: '50px' }}></SwapHorizontalCircleIcon>
            <SelectBox></SelectBox>
        </StyledBox>
    )
}

export default LanguageSelection;

const StyledBox = styled(Box)`
    margin-top: 50px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: #845cc3;
    border-radius: 15px;
    height: 80px;
`