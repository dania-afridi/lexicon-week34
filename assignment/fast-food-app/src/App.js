import './App.css';
import React, {useState} from 'react';
import NavBar from './components/Navbar';
import Banner from './components/Banner';
import Menu from './components/Menu';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleHandler = ()=>{
        setIsDarkMode(!isDarkMode);
    };
  return (
    <div className={isDarkMode ? 'dark' : 'light'}>
      <NavBar darkMode={isDarkMode} handler={toggleHandler}/>
      <Banner/>
      <Menu darkMode = {isDarkMode}/>
    </div>
  );
}

export default App;
