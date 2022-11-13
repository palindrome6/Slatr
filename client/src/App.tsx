import React from 'react';
import './App.css';
import AppBar from './appbar/appbar';
import LanguageSelection from './languageSelection/languageSelect';
import './fonts/Montserrat/Montserrat-Bold.ttf';
import './fonts/Abel/Abel-Regular.ttf'
import TranslatedText from './translatedText';

function App() {
  return (
    <div className="App">
      <AppBar></AppBar>
      <LanguageSelection></LanguageSelection>
      <TranslatedText></TranslatedText>
    </div>
  );
}

export default App;
