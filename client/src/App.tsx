import React from 'react';
import './App.css';
import AppBar from './appbar/appbar';
import TranslatedText from './translatedText';
import styled from "styled-components";
import backgroundimage from "./assets/languages-background.jpg";

function App() {
  return (
    <AppContainer className="app-container">
      <AppBar></AppBar>
      <TranslatedText></TranslatedText>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
 background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url(${backgroundimage});
  background-size: cover;
  background-repeat: none;
  position: relative; 
  height: 100vh;
  width: 100vw;
`
const StyledBackground = styled.div`
  opacity: 0.5;
  background-image: url(${backgroundimage});
  background-size: cover;
  background-repeat: none;
  width: 100vw;
  height: 100vh;
  position: absolute;
`
