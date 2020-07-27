import React, { useState, useEffect } from 'react';
import { AnimatedRoute } from 'react-router-transition';
import { useHistory } from 'react-router-dom';
import routes from './routes-list';
import Footer from '../Footer/Footer';

export default function Routes() {

    const getCurrentRouteIndex = () => (
        routes.findIndex(({ to }) => to === window.location.pathname)
    );
    const history = useHistory();
    const animationOffset = 100;
    const [currentRouteIndex, setCurrentRouteIndex] = useState(getCurrentRouteIndex());
    const [prevRouteIndex, setPrevRouteIndex] = useState(getCurrentRouteIndex());

    useEffect(() => {
        history.listen(() => {
            let routeIndex = getCurrentRouteIndex();
            setCurrentRouteIndex(routeIndex);
            //This obviously requires an explanation.
            //We are keeping the index of the current and previous route
            //to determine the direction of the route change animation
            //further down (either left to right or vice-versa)
            //The point is, AnimatedRoute doesn't provide any obvious
            //way to set up the animation duration (it's 1s by default)
            //If we update it earlier on, users will get a flickering effect
            //because of the direction change in the middle of the animation
            //If, on the other way around, we increase the value,
            //then direction could be wrongly calculated if users
            //change route before the timeout happens. It actually can
            //happen now if the user changes route before the animation
            //ends, but I guess that's a minor issue, given the circumstances
            setTimeout(() => setPrevRouteIndex(routeIndex), 1000)
        });
        // eslint-disable-next-line
    }, []);

    return (
        <div className="Routes">{
            routes.map(({ id, to, component }, index) => (
                <AnimatedRoute
                    key={id}
                    path={to}
                    exact
                    render={() => (
                        <div className={component.name}>
                            <div className="wrapper">
                                <main>{component()}</main>
                                <Footer {...routes[index + 1]} />
                            </div>
                        </div>
                    )}
                    className={`AnimatedRoute is-${id}`}
                    atEnter={{ offset: animationOffset }}
                    atLeave={{ offset: -animationOffset }}
                    atActive={{ offset: 0 }}
                    mapStyles={(styles) => {
                        let offset = prevRouteIndex < currentRouteIndex ? styles.offset : -styles.offset;
                        return {
                            transform: `translateX(${offset}%)`,
                        };
                    }} />
            ))
        }</div>
    )
}