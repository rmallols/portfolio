import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'animate.css';
import Menu from './shared/Menu/Menu';
import Routes from './shared/Routes/Routes';

function App() {

    return (
        <div className="App">
            <Router>
                <Menu />
                <Routes />
            </Router>
        </div>
    );
}

export default App;