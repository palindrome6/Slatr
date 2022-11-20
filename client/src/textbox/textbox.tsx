import { Box, TextField } from "@mui/material";
import React from "react";
import styled from "styled-components";

type TextBoxProps = {
    onChangeText?: (event: any) => void;
    value?: string;
};
const TextBox = ({ value, onChangeText }: TextBoxProps) => {
    const [textValue, setTextValue] = React.useState(value);
    const handleOnChangeText = (event: any) => {
        const textToDisplay = event.target.value;
        setTextValue(textToDisplay);
        if (onChangeText !== undefined) {
            onChangeText(textToDisplay);
        }
    }
    return (
        <StyledTextField id="outlined-basic" multiline={true} onChange={handleOnChangeText} value={value}
            rows={10} />
    )
}

export default TextBox;

const StyledTextField = styled(TextField)`
    border-radius: 20px;
    width: 600px;
    background-color: white;
    .css-dpjnhs-MuiInputBase-root-MuiOutlinedInput-root{
        font-family: "CardoRegular" !important;
        font-size: 30px;
    }
`