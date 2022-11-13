import { MenuItem, Select, SelectChangeEvent } from "@mui/material"
import React, { ReactNode } from "react";
import styled from "styled-components";
import data from '../data/iso2_to_name.json'

interface ILanguageKey {
    [key: string]: string;
}

type SelectProps = {
    fromOrTo: string
};

const SelectBox = ({ fromOrTo }: SelectProps) => {
    const languageData: ILanguageKey = data;
    const defaultSelectState = fromOrTo === 'to' ? 'en' : 'nl'
    const [selectedLanguage, setSelectedLanguage] = React.useState(defaultSelectState);
    const onLanguageChange = (event: SelectChangeEvent<unknown>, child: ReactNode) => {
        const language = event.target.value;
        setSelectedLanguage(language as string);
    }
    return (
        <>
            <StyledSelect
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Language"
                value={selectedLanguage}
                onChange={onLanguageChange}>
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
    width: 200px;
    border: 1px solid white;    
`;

const StyledMenu = styled(MenuItem)`
    color: white;
`