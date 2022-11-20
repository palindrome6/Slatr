import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import React, { ReactNode } from "react";
import styled from "styled-components";
import data from '../data/iso2_to_name.json'

interface ILanguageKey {
    [key: string]: string;
}

type SelectProps = {
    onChange?: (text: string) => void;
    style?: React.CSSProperties;
    value?: string;
};

const SelectBox = ({ onChange, style, value }: SelectProps) => {
    const languageData: ILanguageKey = data;
    Object.values(data).sort().forEach(a => data[Object.keys(data).find(key => data[key as keyof typeof data] === a) as keyof typeof data] = a);
    const [selectedLanguage, setSelectedLanguage] = React.useState(value);
    React.useEffect(() => {
        setSelectedLanguage(value);
    }, [value]);
    const onLanguageChange = (event: SelectChangeEvent<unknown>, child: ReactNode) => {
        const language: string = event.target.value as string;
        setSelectedLanguage(language);
        if (onChange !== undefined && onChange !== null) {
            onChange(language)
        }
    }
    // const getFlagOfCountry = async (countryCode: string) => {
    //     const res = await fetch(`https://countryflagsapi.com/svg/${countryCode}`, {
    //         method: 'get',
    //         headers: {
    //             "Access-Control-Allow-Origin": "*"
    //         }
    //     })
    //     const svg = await res.text();
    //     const holder = document.createElement('div');
    //     holder.innerHTML = svg;
    //     console.log(holder)
    // }
    // getFlagOfCountry('nl');
    return (
        <>
            <StyledSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Language"
                value={selectedLanguage}
                onChange={onLanguageChange}
                style={style}>
                {Object.keys(languageData).map((language, index) => {
                    return (
                        <StyledMenu key={`${index}${language}`} value={language}>{languageData[language as keyof typeof languageData]}</StyledMenu>
                    )
                })}
            </StyledSelect>
        </>

    )
}

export default SelectBox;

const StyledSelect = styled(Select)`
    width: 600px;
    border: 1px solid white;
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
        background: white !important;
    }
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:focus{
        outline: none;
        border: 1px solid black;
    }
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input:focus-visible{
        outline: none !important;
    }
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline:focus-visible{
        outline: none !important;
    }
    .css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root:focus-visible{
        outline: none !important;
    }
`;

const StyledMenu = styled(MenuItem)`
`