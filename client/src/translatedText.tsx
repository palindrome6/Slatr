import { Box } from "@mui/material";
import styled from "styled-components";
import TextBox from "./textbox/textbox";
import TranslateIcon from '@mui/icons-material/Translate';
import SwapHorizontalCircleIcon from '@mui/icons-material/SwapHorizontalCircle';
import SelectBox from "./select/select";
import React from "react";

const TranslatedText = () => {
    const [textToTransalate, setTextToTranslate] = React.useState('');
    const [translatedText, setTranslatedText] = React.useState('');
    const [fromLang, setFromLanguage] = React.useState('en');
    const [toLang, setToLanguage] = React.useState('nl');
    const fetchTranslatedData = async () => {
        const res = await fetch(`http://127.0.0.1:5000/translate?fromlang=${fromLang}&tolang=${toLang}&text=${textToTransalate}`, {
            method: 'get',
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        });
        const translatedValue = await res.text();
        return translatedValue;
    }
    const displayTranslatedText = async () => {
        const translatedText = fetchTranslatedData();
        setTranslatedText(await translatedText);
    }
    const swapLanguages = async () => {
        setFromLanguage(toLang);
        setToLanguage(fromLang);
        setTranslatedText(textToTransalate);
        let fromText;
        if (textToTransalate !== '' && (translatedText === '' || translatedText === null)) {
            fromText = fetchTranslatedData();
        } else {
            fromText = translatedText;
        }
        setTextToTranslate(await fromText);
    }
    return (
        <>
            <StyledSelectBox>
                <SelectBox style={{ marginLeft: '90px' }} onChange={setFromLanguage} value={fromLang}></SelectBox>
                <StyledSwapIcon onClick={swapLanguages}></StyledSwapIcon>
                <SelectBox style={{ marginRight: '100px' }} onChange={setToLanguage} value={toLang}></SelectBox>
            </StyledSelectBox>
            <StyledTextBox>
                <TextBox onChangeText={setTextToTranslate} value={textToTransalate}></TextBox>
                <StyledTranslateIcon onClick={displayTranslatedText}></StyledTranslateIcon>
                <TextBox onChangeText={setTranslatedText} value={translatedText}></TextBox>
            </StyledTextBox>
        </>
    )
}

export default TranslatedText;

const StyledTextBox = styled(Box)`
    display: flex;
    flex-direction: row;
    margin-top: 50px;
    justify-content: space-between;
    padding-left: 50px;
    padding-right: 50px;
`
const StyledTranslateIcon = styled(TranslateIcon)`
    color: black;
    font-size: 100px !important;
    height: 100px;
    padding-top: 70px;
    cursor: pointer;
    :hover{
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
    }
`

const StyledSwapIcon = styled(SwapHorizontalCircleIcon)`
    color: black;
    font-size: 50px !important;
    margin-left: 60px;
    margin-right: 60px;
    cursor: pointer;
    :hover{
        box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1)
    }
`

const StyledSelectBox = styled(Box)`
    margin-top: 50px;
    display:flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    height: 80px;
`