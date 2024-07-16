// src/App.jsx
import React, { useState } from 'react';
import Login from './Login';
import Onboarding from './Onboarding';
import Register from './Register';


const App = () => {
    const [currentScreen, setCurrentScreen] = useState('onboarding'); // Initial screen

    const navigateTo = (screen) => {
        setCurrentScreen(screen);
    };

    return (
        <div>
            {currentScreen === 'onboarding' && <Onboarding navigateTo={navigateTo} />}
            {currentScreen === 'login' && <Login navigateTo={navigateTo} />}
            {currentScreen === 'register' && <Register navigateTo={navigateTo} />}
            {currentScreen === 'tracking' && <Tracking />}
        </div>
    );
};

export default App;
