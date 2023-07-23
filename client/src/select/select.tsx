import React from "react";
import styled from "styled-components";
import data from '../data/iso2_to_name.json'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

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
    const [showSelectListDiv, setShowSelectListDiv] = React.useState(false);
    const [selectedLanguage, setSelectedLanguage] = React.useState(languageData[value as keyof typeof languageData]);
    const [languageList, setLanguageList] = React.useState(Object.keys(languageData));
    Object.values(languageData).sort().forEach(a => languageData[Object.keys(languageData).find(key => languageData[key as keyof typeof languageData] === a) as keyof typeof languageData] = a);

    React.useEffect(() => {
        setSelectedLanguage(languageData[value as keyof typeof languageData]);
    }, [languageData, value]);

    const toggleSelectList = () => {
        setShowSelectListDiv(!showSelectListDiv)
    }

    const handleOnClickList = (language: any) => {
        setSelectedLanguage(languageData[language as keyof typeof languageData]);
        setShowSelectListDiv(false);
        if (onChange !== undefined && onChange !== null) {
            onChange(language)
        }
    }

    const handleOnChangeInput = (event: any) => {
        const inputValue: string = event?.target?.value;
        setSelectedLanguage(inputValue);
        if (showSelectListDiv === true) {
            setLanguageList(Object.keys(languageData).filter((value) => languageData[value as keyof typeof languageData].toLowerCase().includes(inputValue.toLowerCase())));
        }
    }

    return (
        <StyledSelectConatiner>
            <InputContainer onClick={toggleSelectList} >
                <StyledInput type="text" placeholder="Select language" onChange={(event) => handleOnChangeInput(event)} value={selectedLanguage} />
                <StyledIcon icon={faCaretDown}></StyledIcon>
            </InputContainer>
            {
                showSelectListDiv === true &&
                <StyledListContainer >
                    {languageList.map((language, index) => {
                        return (
                            <StyledList key={index + language} onClick={() => handleOnClickList(language)}>{languageData[language as keyof typeof languageData]}</StyledList>
                        )
                    })
                    }
                </StyledListContainer>
            }
        </StyledSelectConatiner>

    )
}

export default SelectBox;

const StyledInput = styled.input`
  position: relative; 
  top: 0;
  left: 0;
  width: 450px;
  font-weight: 600;
  letter-spacing: 1px;
  height: 2.5rem;
  font-size: 1rem;
  padding: 1rem;
  background-color: transparent;
  border: 3px solid transparent;
  transition: .3s ease-in-out;
  text-align: center;
  color: #dae3de;
  &::-webkit-input-placeholder {
    color: #dae3de;
  }
  &:focus{
    
    outline: 0;
    color: #dae3de;
    &::-webkit-input-placeholder {
        color: #dae3de;
    }
  }
  &:hover {
    cursor: pointer;
    &::-webkit-input-placeholder {
        color: #dae3de;
    }
  }
`
const StyledListContainer = styled.div`
  position: absolute;
  list-style: none;
  border-radius: 5px;
  width: 530px;
  max-height: 250px;
  overflow: auto;
  transition: .3s ease-in-out;
  z-index: 99999999;
`
const StyledList = styled.div`
    position: relative;
    height: 2.5rem;
    background: #1e363e;
    padding: 1rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 480px;
    opacity: 1;
    pointer-events: all;
    left: 25px;
    padding: 0 25px;
    
    &:hover {
      color: #ff6900;
    }
`

const StyledSelectConatiner = styled.div`
* {
  box-sizing: border-box;
}
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-right: 20px;
    background-color: #1e363e;
    margin: 0 25px;
    width: 480px;
    height: 60px;
    align-items: center;
    border-radius: 5px;
`

const StyledIcon = styled(FontAwesomeIcon)`
    cursor: pointer;
    pointer-events: all;
`