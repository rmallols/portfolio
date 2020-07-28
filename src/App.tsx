import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './shared/Header/Header';
import Routes from './shared/Routes/Routes';
import SocialMediaLinks from './shared/SocialMediaLinks/SocialMediaLinks';
import 'animate.css';

function App() {

    const setViewHeight = () => {
        // This is necessary to prevent from having issues on mobile web
        // because of its (potentially) floating address bar
        const vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    useEffect(() => {
        setViewHeight();
        window.addEventListener('resize', setViewHeight);
    }, []);

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes />
                <SocialMediaLinks />
            </Router>
        </div>
    );
}

export default App;