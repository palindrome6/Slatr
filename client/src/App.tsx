import React from 'react';
import './App.css';
import AppBar from './appbar/appbar';
import TranslatedText from './translatedText';
import styled from "styled-components";
import AnimatedTitle from './AnimatedTitle';
import DotRing from './cursor/DotRingCursor';

function App() {
  const [showAnimatedTitle, setShowAnimatedTitle] = React.useState(true)
  const changePageTimeOut = setTimeout(() => {
    setShowAnimatedTitle(false);
    clearTimeout(changePageTimeOut);
  }, 2000)
  return (
    <AppContainer className="app-container">
      <DotRing />
      {showAnimatedTitle === true ?
        <AnimatedTitle></AnimatedTitle>
        :
        <MainContent>
          <AppBar></AppBar>
          <TranslatedText></TranslatedText>
        </MainContent>
      }
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  position: relative; 
  height: 100vh;
  width: 100vw;
  
`

const MainContent = styled.div`
  position: absolute;
  bottom: -100%;
  opacity:0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 10px;

  @keyframes smooth-appear {
  to{
    bottom: 20px; 
    opacity:1;
  }
}
animation: smooth-appear 2s ease forwards;
`
