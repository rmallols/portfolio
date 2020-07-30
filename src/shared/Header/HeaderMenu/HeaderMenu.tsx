import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import HeaderMenuNav from './HeaderMenuNav/HeaderMenuNav';
import routesList, { Route } from '../../Routes/routesList';
import Link from '../../Link/Link';

export default function HeaderMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="HeaderMenu" data-testid="HeaderMenu">
            <HeaderMenuNav isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
            <div className={`links ${isOpen ? 'is-open' : ''}`}>
                {routesList.map((route) => (
                    <MenuLink
                        key={route.to}
                        route={route}
                        onClick={() => setIsOpen(false)}
                    />
                ))}
            </div>
        </div>
    );
}

function MenuLink({ route: { to, text, isExternal }, onClick }: MenuLinkProps) {
    const location = useLocation();
    const isActive = () => to === location.pathname;

    return (
        <Link
            to={to}
            text={text}
            isExternal={isExternal}
            className={isActive() ? 'is-active' : ''}
            onClick={onClick}
        />
    );
}

interface MenuLinkProps {
    route: Route;
    onClick: (event: React.MouseEvent) => void;
}
