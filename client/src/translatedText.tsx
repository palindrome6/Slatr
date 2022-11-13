import { Box } from "@mui/material";
import styled from "styled-components";
import TextBox from "./textbox/textbox";
import TranslateIcon from '@mui/icons-material/Translate';

const TranslatedText = () => {
    const fetchTranslatedData = async () => {
        const res = await fetch(`${process.env.BASE_URL}:${process.env.PORT}\translate`, {
            method: 'get'
        });
        const listDataFromApi = res.json();
        return listDataFromApi;
    }
    return (
        <StyledBox>
            <TextBox></TextBox>
            <StyledTranslateIcon onClick={fetchTranslatedData}></StyledTranslateIcon>
            <TextBox></TextBox>
        </StyledBox>
    )
}

export default TranslatedText;

const StyledBox = styled(Box)`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
`
const StyledTranslateIcon = styled(TranslateIcon)`
    color: #8467D7;
    font-size: 100px !important;
    height: 100px;
    padding-top: 70px;
    cursor: pointer;
    :hover{
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
}
`