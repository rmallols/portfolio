import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'animate.css';
import Header from './shared/Header/Header';
import Routes from './shared/Routes/Routes';

function App() {

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes />
            </Router>
        </div>
    );
}

export default App;