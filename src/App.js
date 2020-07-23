import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';
import 'animate.css';
import Menu from './shared/Menu/Menu';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';

function App() {

    const animationOffset = 100;
    const routes = [
        { path: '/', component: Home },
        { path: '/about-me', component: AboutMe },
    ];

    return (
        <div className="App">
            <Router>
                <Menu />
                {
                    routes.map(({ path, component }) => (
                        <AnimatedRoute
                            key={path}
                            path={path}
                            exact
                            component={component}
                            className="AnimatedRoute"
                            atEnter={{ offset: animationOffset }}
                            atLeave={{ offset: -animationOffset }}
                            atActive={{ offset: 0 }}
                            mapStyles={(styles) => ({
                                transform: `translateX(${styles.offset}%)`,
                            })} />
                    ))
                }
            </Router>
        </div>
    );
}

export default App;