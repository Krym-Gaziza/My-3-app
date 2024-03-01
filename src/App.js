import React, { useState } from 'react';
import ComponentA from './components/ComponentA'; 
import ComponentB from './components/ComponentB'; 
import Tooltip from './components/Tooltip'; 
import './index.css';
import ReactSwitch from 'react-switch';
export const ThemeContext = React.createContext(null);

const App = ({ Component, pageProps }) => {
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  const [language, setLanguage] = useState('ru');
  const toggleLanguage = () => {
    setLanguage(prevLanguage => prevLanguage === 'ru' ? 'en' : 'ru');
  };
  return (
    <ThemeContext.Provider value={{ theme, setTheme}}>
      
        <div className="App" id={theme}>
          <div className="switch">
            <label> {theme === "light" ? "Light Mode" : "Dark Mode"}</label>
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
          </div>
          <div className="flex-container">
            <div>
              <ComponentA isTrackingTime={false} />
            </div>
            <div>
              <ComponentB isTrackingTime={true} />
            </div>
          </div>
          <div className="container">
            <Tooltip position="top" content={language === 'ru' ? 'Верхний элемент' : 'Top Tooltip'}>
              <button>{language === 'ru' ? 'Верх' : 'Top'}</button>
            </Tooltip>
            <Tooltip position="right" content={language === 'ru' ? 'Правый элемент' : 'Right Tooltip'}>
              <button>{language === 'ru' ? 'Право' : 'Right'}</button>
            </Tooltip>
            <Tooltip position="bottom" content={language === 'ru' ? 'Нижний элемент' : 'Bottom Tooltip'}>
              <button>{language === 'ru' ? 'Низ' : 'Bottom'}</button>
            </Tooltip>
            <Tooltip position="left" content={language === 'ru' ? 'Левый элемент' : 'Left Tooltip'}>
              <button>{language === 'ru' ? 'Лево' : 'Left'}</button>
            </Tooltip>
          </div>
          <div className="toggle-container">
            {/* <ThemeToggle /> */}
          </div>
          <div className="block-container">
            <div className="text-block">
              {language === 'ru' ? (
                <p>Языки программирования — это всегда некоторые модели (виртуальные вычислительные машины), позволяющие наиболее эффективно использовать возможности вычислительных средств, существенные для конкретных областей применения.</p>
              ) : (
                <p>Programming languages are always some models (virtual computing machines) that allow the most efficient use of computing capabilities that are essential for specific applications.</p>
              )}
            </div>
          </div>
          <div className="container-b">
            <button onClick={toggleLanguage}>Change Language</button>
          </div>
        </div>
    </ThemeContext.Provider>
  );
};

export default App;
