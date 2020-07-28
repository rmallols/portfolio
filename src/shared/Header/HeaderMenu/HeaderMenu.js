import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderMenuNav from './HeaderMenuNav/HeaderMenuNav';
import routesList from '../../Routes/routesList';
import Link from '../../Link/Link';

export default function HeaderMenu() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="HeaderMenu">
            <HeaderMenuNav isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            <div className={`links ${isOpen ? 'is-open' : ''}`}>{
                routesList.map(route => (
                    <MenuLink
                        key={route.to}
                        route={route}
                        onClick={() => setIsOpen(false)}
                    />
                ))
            }</div>
        </div>
    );
}

function MenuLink({ route, onClick }) {

    const location = useLocation();
    const isActive = () => route.to === location.pathname;

    return (
        <Link
            {...route}
            onClick={onClick}
            className={isActive() ? 'is-active' : ''}
        />
    );
}