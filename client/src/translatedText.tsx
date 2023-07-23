import { Box } from "@mui/material";
import styled from "styled-components";
import TextBox from "./textbox/textbox";
import TranslateIcon from '@mui/icons-material/Translate';
import SelectBox from "./select/select";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchange } from '@fortawesome/free-solid-svg-icons';

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
            <Container>
                <StyledSelectBox>
                    <SelectBox onChange={setFromLanguage} value={fromLang}></SelectBox>
                    <StyledSwapIcon icon={faExchange} size="lg" onClick={swapLanguages}></StyledSwapIcon>
                    <SelectBox onChange={setToLanguage} value={toLang}></SelectBox>
                </StyledSelectBox   >
                <StyledTextBox>
                    <TextBox onChangeText={setTextToTranslate} value={textToTransalate}></TextBox>
                    <StyledTranslateIcon onClick={displayTranslatedText}></StyledTranslateIcon>
                    <TextBox onChangeText={setTranslatedText} value={translatedText}></TextBox>
                </StyledTextBox>
            </Container>
        </>
    )
}

export default TranslatedText;

const StyledTextBox = styled(Box)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 20px;
    margin: 0 50px;
`
const StyledTranslateIcon = styled(TranslateIcon)`
    color: black;
    font-size: 30px !important;
    height: 100px;
    cursor: pointer;
    :hover{
        opacity: 0.6;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction:column;
    color: #dae3de;
    opacity: 1;
    height: 450px;
    border-radius: 7px;
    margin: 50px 50px;
`

const StyledSwapIcon = styled(FontAwesomeIcon)`
    margin: 10px 0px;
    cursor: pointer;
    color: #1e363e;
`

const StyledSelectBox = styled(Box)`
    display:flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
    margin: 20px 50px;
`