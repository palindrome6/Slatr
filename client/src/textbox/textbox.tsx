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
        <StyledTextField id="outlined-basic" onChange={handleOnChangeText} value={value}
            placeholder="Enter text"
            rows={8} />
    )
}

export default TextBox;

const StyledTextField = styled.textarea`
    border-radius: 5px;
    /* border: solid 1px #dae3de; */
    width: 480px;
    background-color: transparent;
    color: #1e363e !important;
    outline: 0;
    resize: none;
    font-size: 15px;
    background-image: linear-gradient(#dae3de 50%, #F9F9F9 50%);
    background-size: 100% 4rem;
    border: 1px solid #CCC;
    line-height: 2rem;
`